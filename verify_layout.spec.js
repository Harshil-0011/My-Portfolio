
import { test, expect } from '@playwright/test';

test('verify terminal layout', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForSelector('h1', { text: 'Harshil Gorasiya' });

  // Wait for animations to settle
  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/home/jules/verification/terminal_layout_final.png', fullPage: true });
});
