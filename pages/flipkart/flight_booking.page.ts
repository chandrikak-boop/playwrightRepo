import { expect, Page } from '@playwright/test';
import { error } from 'console';
import { TIMEOUT } from 'dns';

export class FlightBookingPage {
    /**
     * import { Page } from '@playwright/test';
     */
  page: Page;
  from: any;
  destination: any;
  departOn: any;
  month:any;
  day:any;
  next:any;
  searchBtn:any;
  constructor(page: Page) {
    this.page = page;
    this.from = page.locator('//div[@class="YZYCxK U1LCmH"]/input[@name="0-departcity"]')
    this.destination = page.locator('//div[@class="YZYCxK U1LCmH"]/input[@name="0-arrivalcity"]')
    this.departOn = page.locator('//div[@class="wN1kJt U1LCmH"]/input[@name="0-datefrom"]')
    this.month=page.locator('//table[@class="RYl+NW"]//div[@class="_1w7bXX"]').nth(0)
    this.day=page.locator('//tbody/tr/td/div/button')
    this.next=page.locator('//div[@class="au1mSN"]/button[@class="R0r93E"]')
    this.searchBtn=page.getByRole('button',{name:'SEARCH'})
  }

  async fromCity(cityName: string): Promise<void> {
  await expect(this.from).toBeVisible({ timeout: 5000 })
  await this.from.fill(cityName);
  await this.from.press('ArrowDown')
  await this.from.press('Enter')

  }
  async toCity(cityname:string){
    await expect(this.destination).toBeVisible({ timeout: 5000 })
    await this.destination.fill(cityname)
    await this.destination.press('ArrowDown')
    await this.destination.press('Enter')
  }

  async departDate(month:string,day:number){
     await this.departOn.click()
    let monthName:string=await this.month.textContent()
    while(monthName !==month){
        await this.next.click()
        monthName=await this.month.textContent()
    }
    
    try{
        await this.day.filter({hasText:day}).nth(0).click({timeout:5000})
    }
    catch(e:any)
    {
        if(e.name=='TimeoutError')
        console.log(e);
        
    }
  }
  async searchFlight(){
    await expect(this.searchBtn).toBeVisible({ timeout: 5000 })
    await this.searchBtn.click();
  }
}
