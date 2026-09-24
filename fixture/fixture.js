import { test as base } from '@playwright/test'
//we need to use {} for named object and without {} if object is not named
import { LoginPage, loginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

export const test=base.extend({
//we can give different names as below loginPageFixture,use(loginPage)?
    loginPageFixture: async ({ page }, use) => {
        console.log("Inside login page fiture");
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
dashboardPage:async({page},use)=>{
console.log('Inside dashboard fixture');
const dashboardPage=new DashboardPage(page);
await use(dashboardPage);
}
    
});