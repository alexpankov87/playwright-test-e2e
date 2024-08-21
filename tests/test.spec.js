const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

test.describe('Тест на генерацию случайных нечетных чисел и исчезновение кнопки', () => {
  const browsers = ['chromium', 'firefox', 'webkit'];

  for (const browserType of browsers) {
    test(`Тестирование в ${browserType}`, async ({ browser }) => {

      const context = await browser.newContext({ browserName: browserType });
      const page = await context.newPage();

      await page.goto('http://127.0.0.1:8080/index.html');

      await page.addStyleTag({ path: 'css/style.css' });

      const startButton = page.locator('.btn-digits');
      await expect(startButton).toBeVisible();

      await startButton.click();

      const displayNumber = await page.locator('.digit-total-number').textContent();
      expect(displayNumber).not.toBe(''); 
      const number = parseInt(displayNumber, 10);
      expect(number % 2).not.toBe(0);

      await expect(startButton).not.toBeVisible();

      await context.close();
    });
  }
});
