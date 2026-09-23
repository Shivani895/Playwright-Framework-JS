import { BasePage } from "./BasePage";

/* ./ means current directory */


export class LoginPage extends BasePage{

    constructor(page)
    {
      super(page);
       this.page=page;

       this.userNameField= page.getByPlaceholder('Enter Email');
       this.passwordField =page.getByPlaceholder('Enter Password')
       this.loginButton=page.getByText('Sign in',{exact:true})
       this.newUserSignUpLink=page.getByRole('link',{name:'New user? Signup'});
       this.errorMessage=page.locator('.errorMessage');

    }

   async loginToApplication(username,password)
    {
      await this.type(this.userNameField,username)
      await this.type(this.passwordField,password)
      
       await this.click(this.loginButton);
    }

    async clickOnNewUserSignUpLink()
    {
      await this.click(this.newUserSignUpLink);
    }
    async getErrorMessage()
    {
      return await this.getText(this.errorMessage);

    }
}
