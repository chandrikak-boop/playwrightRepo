import {test} from '@playwright/test'
test('beforeAll',({page})=>{
    console.log("Runs before all the tests");
})

test('test1',({})=>{
    console.log("test1");
    
})

test.beforeEach('beforeEach',({})=>{
    console.log("Runs before each test"); 
})

test.afterAll('afterAll',()=>{
    console.log("Runs after all the tests");
})
test.afterEach('afterEach',()=>{
console.log("Runs after each test");

})