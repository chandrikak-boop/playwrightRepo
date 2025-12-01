"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
};
exports.default = config;
