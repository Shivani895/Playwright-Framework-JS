import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {DashboardPage} from '../pages/DashboardPage.js'
import user from '../test-data/user.json'
/* everything which belongs to one screen or one url is called one page..even if one html modal comes
in a page it would be in same page */
test.describe('login and logout test',{tags:['smoke','login']},()=>{
test('login and logout functionality',async ({page})=>{
    await page.goto('/login');

    const loginPage =new LoginPage(page);
    console.log(`Username is : ${user.userName} and Password is ${user.password}`);
    
   await loginPage.loginToApplication(user.userName,user.password);
      const dashboardPage = new DashboardPage(page);
     await dashboardPage.clickOnMenuIcon();
     await dashboardPage.clickOnSignOutButton();
})
})
