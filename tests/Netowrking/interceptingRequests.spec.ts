import {test,expect} from '@playwright/test'
import { url } from 'inspector'
test.skip('request intercepting',async({page})=>{
    page.on('request',req=>{console.log(`>>: ${req.method()} : ${req.resourceType()} : ${req.url()} `)})
    // page.on('response',res=>{console.log(`<< : ${res.status()} : ${res.url()}`)})
    await page.route('**/*',route=>{
        if(route.request().resourceType()=='image')
            return route.abort()
        return route.continue()
    })
await page.goto('https://testautomationpractice.blogspot.com/')
 
})
test.only('mocking response',async({page})=>{
    const mockResponseBody=[{
        "id": 1,
        "title": "playwright mocking response",
        "author": "That's me",
        "genre": "automation",
        "price": "9.95",
        "rating": "★★★★☆",
        "stock": "1"
    },
{
        "id": 2,
        "title": "playwright mocking response 2",
        "author": "That's me again",
        "genre": "automation playwright",
        "price": "9.95",
        "rating": "★★★★☆",
        "stock": "1"
    }

]
     page.route('https://danube-webshop.herokuapp.com/api/books',async (route)=>{
        route.fulfill({
            contentType:'application/json',
            body:JSON.stringify(mockResponseBody)
        })
        let resonse=await route.fetch();
        console.log(resonse);
        
    })
    await page.goto('https://danube-webshop.herokuapp.com/')
    await page.waitForTimeout(2000)
})

test('mocking resonses 2',async({page})=>{
    const responseBody=[{
    "data": {
        "leave.assign_leave": false
        ,
        "leave.leave_list": true,
        "leave.apply_leave": true,
        "leave.my_leave": true,
        "time.employee_timesheet": true,
        "time.my_timesheet": true
    },
    "meta": [],
    "rels": []
}]
     page.route('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',async (route)=>{
       await route.fulfill({contentType:"application/json",
            body:JSON.stringify(responseBody)
        })
      console.log((await route.fetch()).json());


   })
    //  page.route('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',async(route)=>{
    //    const json=  await route.fetch()
    //    console.log(json);
       
    // })
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.getByPlaceholder('Username').fill('Admin')
    // await page.getByPlaceholder('Password').fill('admin123')
    // await page.getByRole('button',{name:'Login'}).click()
})