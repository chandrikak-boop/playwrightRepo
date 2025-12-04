import {test} from '@playwright/test'
import {faker} from '@faker-js/faker'
test('faker library',()=>{
    const fname=faker.person.firstName()
    const lname=faker.person.lastName()
    console.log(fname+" "+lname);
    console.log(faker.airline.airport()); 
})