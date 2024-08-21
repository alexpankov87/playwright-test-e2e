const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  // Доп.опции headless по желанию: отображение открытия браузеров.
  use: {
    headless: false, 
    viewport: { width: 1280, height: 720 }, 
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
};