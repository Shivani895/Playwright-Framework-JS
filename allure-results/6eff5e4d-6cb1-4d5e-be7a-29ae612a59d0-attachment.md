# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login and logout test >> login and logout functionality
- Location: tests/login.spec.js:8:5

# Error details

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - navigation [ref=f4e4]:
    - generic [ref=f4e5]:
      - generic [ref=f4e6] [cursor=pointer]:
        - img "logo" [ref=f4e7]
        - heading "Learn Automation Courses" [level=1] [ref=f4e8]
      - generic [ref=f4e9]:
        - img "menu" [ref=f4e10] [cursor=pointer]
        - generic [ref=f4e11]:
          - generic [ref=f4e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f4e13] [cursor=pointer]
          - generic [ref=f4e14]:
            - link "Home" [ref=f4e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f4e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f4e20]:
    - img "Login" [ref=f4e22]
    - generic [ref=f4e23]:
      - generic [ref=f4e25]:
        - heading "Sign In" [level=2] [ref=f4e26]
        - textbox "Enter Email" [ref=f4e27]: admin@email.com
        - textbox "Enter Password" [ref=f4e28]: admin@123
        - button "Sign in" [active] [ref=f4e29] [cursor=pointer]
        - link "New user? Signup" [ref=f4e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f4e31]:
        - heading "Connect with us" [level=2] [ref=f4e32]
        - generic [ref=f4e33] [cursor=pointer]:
          - link [ref=f4e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f4e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f4e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f4e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f4e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=f4e62]:
    - generic [ref=f4e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f4e64]
      - heading "©2023 All rights reserved" [level=2] [ref=f4e65]
    - generic [ref=f4e66] [cursor=pointer]:
      - link [ref=f4e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f4e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f4e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f4e77]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  | export class DashboardPage extends BasePage{
  4  | 
  5  |     constructor(page)
  6  |     {
> 7  |         this.page=page;
     |         ^ ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  8  | 
  9  |         this.menuIcon = page.getByAltText('menu');
  10 |         this.signOutButton=page.getByRole('button',{name:'Sign out',exact:true});
  11 |     }
  12 | 
  13 |     async clickOnMenuIcon()
  14 |     {
  15 |         await this.click(this.menuIcon);
  16 |        
  17 |     }
  18 |     async clickOnSignOutButton()
  19 |     {
  20 |         await this.click(this.signOutButton);
  21 |     }
  22 | }
```