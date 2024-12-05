// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Directory where your tests are located
    retries: 1,          // Number of times to retry failed tests
    reporter: [
        ['list'],          // Reporter to display test results in the console
        ['html', { open: 'never' }] // Generate HTML report but don't open it automatically
    ],
    use: {
        headless: true,   // Run tests in headless mode (without opening a browser window)
        viewport: { width: 1280, height: 720 }, // Set the browser viewport size
        screenshot: 'only-on-failure', // Take screenshots only for failed tests
        trace: 'retain-on-failure',  // Record a trace for failed tests for debugging
    },
});