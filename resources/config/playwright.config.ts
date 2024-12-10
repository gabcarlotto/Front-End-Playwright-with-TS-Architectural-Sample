import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 1,
    reporter: [
        ['list'],
        ['html', {
            open: 'never', // Don't auto-open the report after running tests
            outputFolder: 'playwright-report' // Explicitly set the output folder
        }]
    ],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        browserName: 'chromium',
    },
    projects: [
        {
            name: 'Chrome',
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
});