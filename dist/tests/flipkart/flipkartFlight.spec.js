"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const flight_booking_page_1 = __importDefault(require("../../pages/flipkart/flight_booking.page"));
(0, test_1.test)('Flipkart Flight Booking', async ({ page }) => {
    await page.goto('https://www.flipkart.com/travel/flights');
    let flightObj = new flight_booking_page_1.default(page);
    await flightObj.fromCity('Bangalore');
});
