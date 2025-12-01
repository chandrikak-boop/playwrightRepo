import {test,expect,page} from '@playwright/test';
import {validateSchemaZod} from 'playwright-schema-validator'
import {z} from 'zod';

test('GET',async({request})=>{
    const response=await request.get('https://api.restful-api.dev/objects')
    //console.log(await response.json());
    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe('OK');
    await expect(response.headers()['content-type']).toBe('application/json');
    //console.log(await response.headers());
    
});
//---------------------- POST and GET ----------------------------


    test('POST',async({request})=>{
    const response=await request.post('https://api.restful-api.dev/objects',{
        data:{
            "name": "my Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    })
    console.log(await response.json());
    console.log(await response.status());
    
    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe('OK');
    let jsonBody=await response.json();
    let userID=jsonBody.id;
    console.log(`User ID: ${userID}`);
})
//---------------------- GET single object ----------------------------
test.only("GET single object",async({request})=>{
    let response=await request.get(`https://api.restful-api.dev/objects/ff8081819782e69e019abae8093c70b8`)
   console.log(await response.json());
   const jsonResponse=await response.json()
    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe('OK');

    //defining schema structure
    const schema=z.object({
  id: z.string(),
  name: z.string(),
  data: z.object({
    year: z.number().int().min(1900).max(new Date().getFullYear()), // Validating year as an integer within a reasonable range
    price: z.number().positive(), // Validating price as a positive number
    'CPU model': z.string(),
    'Hard disk size': z.string(),
    color: z.string()
  })
});
//validating response against schema
await validateSchemaZod({page},jsonResponse,schema)
})

//---------------------- PUT----------------------------
test('PUT',async({request})=>{
let response=await request.put('https://api.restful-api.dev/objects/ff8081819782e69e019abae8093c70b8',{
    data:{
        "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
   }
    }
})
console.log(await response.json());
console.log(await response.status());
await expect(response.status()).toBe(200);
await expect(response.statusText()).toBe('OK');
})
//---------------------- PATCH ----------------------------
test('PATCH',async({request})=>{
    const response=await request.patch('https://api.restful-api.dev/objects/ff8081819782e69e019abae8093c70b8',
        {
            data:{
            "name": "Apple MacBook Pro 16 (Updated Name)"
            }
        }         
    )
    console.log(await response.json());
    console.log(await response.status());
    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe('OK');
})

//---------------------- DELETE ----------------------------
// test('DELETE',async({request})=>{
// const response=await request.delete('https://api.restful-api.dev/objects/ff8081819782e69e019abadc06f3704a')
// console.log(await response.status());
// await expect(response.status()).toBe(200);
// console.log(response.statusText())
// })