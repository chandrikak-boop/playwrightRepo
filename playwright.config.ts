import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // loads .env file
const config: PlaywrightTestConfig = {
  testDir: './tests',
  workers:2,
  fullyParallel:false,
  timeout: 30_000,
  retries:0,
  
  reporter: [['list'], ['html', { open: 'on-failure' }]],
  use: {
    baseURL: process.env.BASE_URL, // This should now be defined
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot:'on-first-failure',
    video:'on-first-retry',
    trace:'on-first-retry'
  },
  projects: [
   // { name: 'Chromium_usersession', use: { browserName: 'chromium',storageState:'tests/auth.json'},dependencies:['setup']},
   // { name: 'Firefox', use: { browserName: 'firefox' } },
   // {name:"setup",testMatch:['login.spec.ts'],use:{browserName: 'chromium',storageState:undefined}},
    { name: 'Chromium', use: { browserName: 'chromium' } }
  ],
};

export default config;