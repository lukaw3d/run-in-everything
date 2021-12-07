import { test } from '@playwright/test';
import { run } from './run.js';

test('Run', async ({ page, browserName, browser }) => {
  console.log('\n\n\n==============================');
  console.log(browserName, browser.version());

  page.on('console', (message) => {
    console.log(message.text());
  });

  await page.evaluate(run);
});
