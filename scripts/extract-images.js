const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const urls = {
  'singapore-maxi-cabs': 'https://smc-sigma-six.vercel.app/',
  'lumos-digital-media': 'https://www.lumosdigitalmedia.in/',
  'lumiwaves': 'https://lumiwaves.in/',
  'zenith-automations': 'https://www.zenithautomations.in/',
  'circledot-design-studio': 'https://www.circledotdesign.in/',
  'ranji-textiles': 'https://ranji-textiles.vercel.app/',
  'vilvam-foundation': 'https://www.vilvamfoundation.in/',
  'mangai-clinic': 'https://mangai-clinic.vercel.app/',
  'priya-woodland': 'https://priya-woodland.vercel.app/'
};

const outputDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirected = new URL(res.headers.location, targetUrl).toString();
        return resolve(fetchUrl(redirected));
      }
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, data: Buffer.concat(chunks) }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function downloadBinary(imageUrl, destinationPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(imageUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': parsed.origin
      },
      timeout: 12000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirected = new URL(res.headers.location, imageUrl).toString();
        return resolve(downloadBinary(redirected, destinationPath));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destinationPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(destinationPath);
      });
      fileStream.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function scrapeAndDownload() {
  console.log('--- Inspecting live URLs ---');
  const results = {};

  for (const [slug, pageUrl] of Object.entries(urls)) {
    console.log(`\nChecking ${slug}: ${pageUrl}`);
    try {
      const res = await fetchUrl(pageUrl);
      const html = res.data.toString('utf-8');

      // Check og:image
      let ogImage = null;
      const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
      if (ogMatch) ogImage = ogMatch[1];

      // Check all <img> tags
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      let match;
      const images = [];
      while ((match = imgRegex.exec(html)) !== null) {
        const src = match[1];
        if (!src.startsWith('data:') && !src.includes('.svg') && !src.includes('analytics') && !src.includes('pixel')) {
          try {
            const absolute = new URL(src, pageUrl).toString();
            images.push(absolute);
          } catch(e) {}
        }
      }

      // Check background-image in inline styles
      const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
      while ((match = bgRegex.exec(html)) !== null) {
        const src = match[1];
        if (!src.startsWith('data:') && !src.includes('.svg')) {
          try {
            const absolute = new URL(src, pageUrl).toString();
            images.push(absolute);
          } catch(e) {}
        }
      }

      console.log(`Found og:image:`, ogImage);
      console.log(`Found ${images.length} image candidate(s):`, images.slice(0, 3));
      results[slug] = { ogImage, images };

      // Try downloading the best candidate as [slug]-hero.jpg or [slug]-preview.jpg
      const candidate = ogImage ? new URL(ogImage, pageUrl).toString() : images[0];
      if (candidate) {
        const ext = path.extname(new URL(candidate).pathname) || '.jpg';
        const dest = path.join(outputDir, `${slug}-hero${ext}`);
        console.log(`Downloading candidate ${candidate} -> ${dest}`);
        try {
          await downloadBinary(candidate, dest);
          console.log(`Successfully saved ${slug}-hero${ext}`);
        } catch (err) {
          console.warn(`Failed downloading ${candidate}:`, err.message);
        }
      }
    } catch (err) {
      console.error(`Error with ${slug}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'scraped-assets.json'), JSON.stringify(results, null, 2));
  console.log('\nDone scraping. Results written to scripts/scraped-assets.json');
}

scrapeAndDownload();
