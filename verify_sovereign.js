import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1000 });
  await page.goto('http://localhost:8002');
  // Wait for images and animations
  await page.waitForTimeout(5000);
  await page.mouse.move(640, 500); // Trigger magnifier
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'final_sovereign_magnifier.png', fullPage: false });
  await browser.close();
})();
