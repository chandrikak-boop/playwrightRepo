import { test, expect } from '@playwright/test';
import {FlightBookingPage} from '../../pages/flipkart/flight_booking.page.ts';

test.only('Flipkart Flight Booking', async ({ browser }) => {
  let context=await browser.newContext(
    {
        'permissions':[]
    })
  let page=await context.newPage()
  await page.goto('https://www.flipkart.com/travel/flights');
  await expect(page).toHaveTitle('Flight bookings, Cheap flights, Lowest Air tickets at Flipkart.com');
  let flightObj:FlightBookingPage= new FlightBookingPage(page);
  await flightObj.fromCity('Bangalore');
  await flightObj.toCity('Mumbai')
  await flightObj.departDate('January 2026',16);
});

test('amazon',async({page})=>{
await page.goto('https://www.amazon.com')
})
test('amazon1',async({page})=>{
await page.goto('https://www.amazon.com')
})
test('amazon2',async({page})=>{
await page.goto('https://www.amazon.com')
})