import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  const title = await page.title()
  expect(title).toBeTruthy();
});
