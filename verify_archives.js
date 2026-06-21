import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.goto('http://localhost:5175');

  // Wait for content to load
  await page.waitForTimeout(2000);

  // Scroll to Archives section
  const archives = await page.locator('#archives');
  await archives.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'verification/archives_fix.png' });
  console.log('Screenshot saved to verification/archives_fix.png');

  await browser.close();
})();
