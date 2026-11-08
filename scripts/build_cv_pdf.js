// Renders cv/en.html and cv/ko.html to A4 PDFs.
// Usage: node scripts/build_cv_pdf.js   (needs Playwright + Chromium)
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const [src, out] of [['cv/en.html', 'cv/Ijun_Jang_CV_EN.pdf'], ['cv/ko.html', 'cv/Ijun_Jang_CV_KO.pdf']]) {
    await page.goto('file://' + path.join(root, src), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(root, out), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('wrote', out);
  }
  await browser.close();
})();
