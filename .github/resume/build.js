// Renders resume.html to assets/George_Jacob_Resume.pdf.
// Usage: node .github/resume/build.js   (needs Playwright with Chromium)
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const src = path.join(__dirname, 'resume.html');
  const out = path.join(__dirname, '..', '..', 'assets', 'George_Jacob_Resume.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + src);
  await page.pdf({ path: out, format: 'A4', preferCSSPageSize: true, printBackground: true });
  await browser.close();
  console.log('Wrote', out);
})();
