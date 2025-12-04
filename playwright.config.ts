import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

// Choose env file based on ENV variable
const ENV_FILE = `.env.${process.env.ENV || 'qa'}`;

if (fs.existsSync(ENV_FILE)) {
  dotenv.config({ path: ENV_FILE });
  console.log(`Loaded environment from ${ENV_FILE}`);
} else {
  console.warn(`Env file ${ENV_FILE} not found!`);
}

const config: PlaywrightTestConfig = {
  testDir: './tests',
  workers:2,
  fullyParallel:false,
  timeout: 30_000,
  retries:0,
  
  reporter: [['list'], ['html', { open: 'on-failure' }],['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL, // This should now be defined
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot:'on-first-failure',
    video:'on',
    trace:'on'
  },
  projects: [
   //{ name: 'chromium', use: { browserName: 'chromium',storageState:'tests/auth.json'},dependencies:['setup']},
//   { name: 'Firefox', use: { browserName: 'firefox' } },
   //{name:"setup",testMatch:['login.spec.ts'],use:{browserName: 'chromium',storageState:undefined}},
   { name: 'Chromium', use: { browserName: 'chromium' } }
  ],
};

export default config;