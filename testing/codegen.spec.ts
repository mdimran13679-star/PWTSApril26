// Codegen - Code Generation - Record and Playback tool

// To open the codegen
// npx playwright codegen
// npx playwright codegen "URL"

// 1. Handle multiple windows
// 2. frames

import { test, expect } from '@playwright/test';

test('Test windows', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});

// To run the above test "Test windows" command is - npx playwright test -g "Test windows"

test('Test Frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Testing');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Testing');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Nested');
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')).toHaveValue('Nested');
});

// To run the above test "Test Frames" command is - npx playwright test -g "Test Frames"

// E2E - end-to-end test case
// Shadow dom element (how do we handle shadow DOM elements)
// Class / Object (how do we create a class and how do we create an object)
// Framework understanding (framework generation)

