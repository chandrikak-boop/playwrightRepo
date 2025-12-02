import { test, expect } from '@playwright/test';
test('POST', async ({ request }) => {
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

test('Get APIToken',async({request})=>{
    const response=await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data:{
            "email": "user400@gmail.com",
            "password": "password123",
            "role": "SHOPPER"
        }
    })
    const jsonBody=await response.json()
    console.log(jsonBody);
})


//jwtToken:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyNDAwQGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzY0MTc2MDg0LCJpYXQiOjE3NjQxNDAwODR9.FaNutCjg74TAJGJaarcf2jcxm9oEAtdJMShN7nfJCCo

test.only('GET',async({request})=>{
    const response=await request.get("https://www.shoppersstack.com/shopping/shoppers/323868",
        {
            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyNDAwQGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzY0Mjc0MzM0LCJpYXQiOjE3NjQyMzgzMzR9.NdAYIwteygF_96mqrQBHV3L8reVjkR1Ui_PbZZ1hg5w'
            }
        }
    );
    console.log(await response.json());
    
})