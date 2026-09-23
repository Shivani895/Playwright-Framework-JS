import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js'
import { DashboardPage } from '../pages/DashboardPage.js'
import multiUser from '../test-data/multipleUsers.json'

for(let user of multiUser)
{
    test(`login functionality Error scenarios ${user.id}`, async ({ page }) => {
    await page.goto('/login');

    const loginPage = new LoginPage(page);
    console.log(`Username is : ${user.username} and Password is ${user.password}`);

    await loginPage.loginToApplication(user.username, user.password);
    expect(await loginPage.getErrorMessage()).toBe(user.message);
    
})
}
