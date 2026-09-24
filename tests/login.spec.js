import { expect } from '@playwright/test'

import { test } from '../fixture/fixture.js';
import user from '../test-data/user.json'
/* everything which belongs to one screen or one url is called one page..even if one html modal comes
in a page it would be in same page */
test.describe('login and logout test', { tags: ['smoke', 'login'] }, () => {
    // why , is used in destructuring i thought for loginpagefixture we wil be needed whole. new {}
    test('login and logout functionality', async ({ page, loginPageFixture, dashboardPage }) => {
        await page.goto('/login');



        await loginPageFixture.loginToApplication(user.userName, user.password);

        await dashboardPage.clickOnMenuIcon();
        await dashboardPage.clickOnSignOutButton();
    })
})
test('login and logout functionality copy', async ({ page }) => {
    await page.goto('/login');

    const loginPage = new LoginPage(page);
    console.log(`Username is : ${user.userName} and Password is ${user.password}`);

    await loginPage.loginToApplication(user.userName, user.password);
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickOnMenuIcon();
    await dashboardPage.clickOnSignOutButton();
})
