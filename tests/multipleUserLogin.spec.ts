import {test,expect} from '@playwright/test'
import users from '../testdata/multipleData.json'
for(const user of users)
{
test(`${user.username}`,async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForLoadState('domcontentloaded')
    try{
    await page.getByPlaceholder('Username').fill(user.username)
    await page.getByPlaceholder('Password').fill(user.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForLoadState('load')
    //    await page.waitForTimeout(1000);
    // Wait for either dashboard or error message
        const dashboardLocator = page.locator('h6:has-text("Dashboard")');
        const errorLocator = page.locator('.oxd-alert-content-text');
        await dashboardLocator?.waitFor({state:'visible',timeout:5000})
        // await errorLocator?.waitFor({state:'visible',timeout:1000})

        if (await dashboardLocator.isVisible()) {
          console.log(`Login successful for user: ${user.username}`);
        }
        else if (await errorLocator.isVisible()) {
          //Throw error to jump to catch
          const errorMsg= await errorLocator.textContent();
          throw new Error(`Login failed for user: ${user.username} — ${errorMsg}`);
        }
    }
    catch(error:any)
    {
        console.log(`🚨 ${error.message}`);
    }
})
}
