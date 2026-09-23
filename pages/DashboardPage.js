import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage{

    constructor(page)
    {
        super(page);
        this.page=page;

        this.menuIcon = page.getByAltText('menu');
        this.signOutButton=page.getByRole('button',{name:'Sign out',exact:true});
    }

    async clickOnMenuIcon()
    {
        await this.click(this.menuIcon);
       
    }
    async clickOnSignOutButton()
    {
        await this.click(this.signOutButton);
    }
}