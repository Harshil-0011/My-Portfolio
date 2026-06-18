
import { test, expect } from '@playwright/test';

test('verify 3d cube in production build', async ({ page }) => {
  await page.goto('http://localhost:4174/');
  await page.waitForLoadState('networkidle');

  // Take a full page screenshot
  await page.screenshot({ path: 'final_production_verification.png', fullPage: true });

  // Check if the vault-core exists
  const vault = page.locator('.vault-core-sphere');
  await expect(vault).toBeVisible();
});
