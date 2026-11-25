const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const targets = [
  {
    slug: 'singapore-maxi-cabs',
    url: 'https://smc-sigma-six.vercel.app/images/Home/Hero_tab.png',
    filename: 'singapore-maxi-cabs-hero.png'
  },
  {
    slug: 'lumos-digital-media',
    url: 'https://www.lumosdigitalmedia.in/assets/hero-studio-Bfe1Vlv7.webp',
    filename: 'lumos-digital-media-hero.webp'
  },
  {
    slug: 'lumiwaves',
    url: 'https://lumiwaves.in/images/hero-smart-home.jpg',
    filename: 'lumiwaves-hero.jpg'
  },
  {
    slug: 'zenith-automations',
    url: 'https://www.zenithautomations.in/assets/hero-lifestyle.jpg',
    filename: 'zenith-automations-hero.jpg'
  },
  {
    slug: 'vilvam-foundation',
    url: 'https://www.vilvamfoundation.in/south-indian-volunteers-distributing-food.jpg',
    filename: 'vilvam-foundation-hero.jpg'
  },
  {
    slug: 'mangai-clinic',
    url: 'https://mangai-clinic.vercel.app/clinic-hero.jpg',
    filename: 'mangai-clinic-hero.jpg'
  },
  {
    slug: 'priya-woodland',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    filename: 'priya-woodland-hero.jpg'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'projects');

function downloadFile(targetUrl, destinationPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirected = new URL(res.headers.location, targetUrl).toString();
        return resolve(downloadFile(redirected, destinationPath));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destinationPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

(async () => {
  for (const item of targets) {
    const dest = path.join(outputDir, item.filename);
    console.log(`Downloading ${item.url} -> ${item.filename}`);
    try {
      await downloadFile(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Saved ${item.filename} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed ${item.filename}:`, err.message);
    }
  }
  console.log('All hero downloads attempted.');
})();
