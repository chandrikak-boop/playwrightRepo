import {test,expect} from '@playwright/test';
test('element interactions',async({page})=>{
// clicks, typing, hovers,drag and drop
await page.goto('https://testautomationpractice.blogspot.com/#')
// const target:any=await page.locator('#draggable').boundingBox()
// await page.locator('#draggable').hover()
// await page.mouse.down()
// await page.mouse.move(target.x+target.width/2,target.y+target.height/2)
// await page.mouse.up()

//dragAndDrop mwthod
//await page.dragAndDrop('#draggable','#droppable')

//dragTo
await page.locator('#draggable').dragTo(page.locator('#droppable'))

//---------------------------------------------------------------------------------------
//sliders
await page.locator('div span[class="ui-slider-handle ui-corner-all ui-state-default"]').hover()
await page.mouse.down()
await page.pause()
})