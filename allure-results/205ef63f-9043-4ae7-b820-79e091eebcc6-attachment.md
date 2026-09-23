# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login and logout test >> login and logout functionality
- Location: tests/login.spec.js:8:5

# Error details

```
ReferenceError: userNameField is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]
        - textbox "Enter Password" [ref=e28]
        - button "Sign in" [ref=e29] [cursor=pointer]
        - link "New user? Signup" [ref=e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e31]:
        - heading "Connect with us" [level=2] [ref=e32]
        - generic [ref=e33] [cursor=pointer]:
          - link [ref=e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=e62]:
    - generic [ref=e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e64]
      - heading "©2023 All rights reserved" [level=2] [ref=e65]
    - generic [ref=e66] [cursor=pointer]:
      - link [ref=e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e77]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  | /* ./ means current directory */
  4  | 
  5  | 
  6  | export class LoginPage extends BasePage{
  7  | 
  8  |     constructor(page)
  9  |     {
  10 |       super(page);
  11 |        this.page=page;
  12 | 
  13 |        this.userNameField= page.getByPlaceholder('Enter Email');
  14 |        this.passwordField =page.getByPlaceholder('Enter Password')
  15 |        this.loginButton=page.getByText('Sign in',{exact:true})
  16 |        this.newUserSignUpLink=page.getByRole('link',{name:'New user? Signup'});
  17 |        this.errorMessage=page.locator('.errorMessage');
  18 | 
  19 |     }
  20 | 
  21 |    async loginToApplication(username,password)
  22 |     {
> 23 |       await this.type(userNameField,username)
     |                       ^ ReferenceError: userNameField is not defined
  24 |       await this.type(passwordField,password)
  25 |       
  26 |        await this.click(loginButton);
  27 |     }
  28 | 
  29 |     async clickOnNewUserSignUpLink()
  30 |     {
  31 |       await this.click(newUserSignUpLink);
  32 |     }
  33 |     async getErrorMessage()
  34 |     {
  35 |       return await this.getText(errorMessage);
  36 | 
  37 |     }
  38 | }
  39 | 
```