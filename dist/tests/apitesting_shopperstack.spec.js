"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('POST', async ({ request }) => {
    //   const uniqueSuffix = Date.now();
    //   const uniqueEmail = `testuser${uniqueSuffix}@gmail.com`;
    //   const uniquePhone = Math.floor(9000000000 + Math.random() * 1000000000);
    const response = await request.post("https://www.shoppersstack.com/shopping/shoppers", {
        data: {
            city: "Blr",
            country: "Ind",
            email: "user400@gmail.com",
            firstName: "test",
            gender: "MALE",
            lastName: "user",
            password: "password123",
            phone: 9807654321,
            state: "Kar",
            zoneId: "ALPHA",
        },
    });
    const jsonBody = await response.json();
    console.log(jsonBody);
    //   // Basic assertions
    //   expect(response.ok()).toBeTruthy();
    //   expect(Array.isArray(jsonBody.data)).toBe(true);
    //   expect(jsonBody.data.length).toBeGreaterThan(0);
    //   // Example of using test data if needed
    //   expect(data).toHaveProperty('baseurl');
});
(0, test_1.test)('Get APIToken', async ({ request }) => {
    const response = await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data: {
            "email": "user400@gmail.com",
            "password": "password123",
            "role": "SHOPPER"
        }
    });
    const jsonBody = await response.json();
    console.log(jsonBody);
});
//jwtToken:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyNDAwQGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzY0MTc2MDg0LCJpYXQiOjE3NjQxNDAwODR9.FaNutCjg74TAJGJaarcf2jcxm9oEAtdJMShN7nfJCCo
test_1.test.only('GET', async ({ request }) => {
    const response = await request.get("https://www.shoppersstack.com/shopping/shoppers/323868", {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyNDAwQGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzY0MTc2MDg0LCJpYXQiOjE3NjQxNDAwODR9.FaNutCjg74TAJGJaarcf2jcxm9oEAtdJMShN7nfJCCo'
        }
    });
    let schema = {
        statusCode: test_1.expect.any(Number),
        message: test_1.expect.any(String),
        data: {
            userId: test_1.expect.any(Number),
            firstName: test_1.expect.any(String),
            lastName: test_1.expect.any(String),
            email: test_1.expect.any(String),
            phone: test_1.expect.anything(),
            password: null,
            role: test_1.expect.any(String),
            gender: test_1.expect.any(String),
            status: test_1.expect.any(String),
            token: test_1.expect.anything(),
            dob: test_1.expect.anything(),
            createdDateTime: test_1.expect.any(String),
            zoneId: test_1.expect.any(String),
            city: test_1.expect.any(String),
            state: test_1.expect.any(String),
            country: test_1.expect.any(String),
            imageId: test_1.expect.anything(),
            addressList: null,
            cartList: null,
            wishList: null,
            shopperOrders: null,
            likes: null,
            jwtToken: test_1.expect.anything(),
        },
    };
    let jsonBody = await response.json();
    console.log(jsonBody);
    (0, test_1.expect)(jsonBody).toMatchObject(schema);
});
