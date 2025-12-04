import {test, expect} from '@playwright/test'
import {Admin} from '../../pages/orangehrm/admin.page'
import data from '../../testdata/orangehrm.json'
const STORAGE_STATE_PATH='auth.json'
test.use({ storageState: STORAGE_STATE_PATH }) // use saved session for all tests in this file

test('admin module', async ({page}) => {
	const adminObj = new Admin(page)
	await page.waitForLoadState('networkidle')
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
	await page.waitForLoadState('networkidle')
	await expect(adminObj.adminLink).toBeVisible({timeout: 10_000})
    await adminObj.enterDetails(data.username,data.employeename)
})