# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multiIUserError.spec.js >> login functionality Error scenarios 1
- Location: tests/multiIUserError.spec.js:9:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Email and Password Doesn't matchh"
Received: "Email and Password Doesn't match"
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
        - textbox "Enter Email" [ref=e27]: admin@email.com
        - textbox "Enter Password" [ref=e28]: admin@1234
        - heading [level=2] [ref=e29]:
          - img "error" [ref=e30]
          - text: Email and Password Doesn't match
        - button "Sign in" [active] [ref=e31] [cursor=pointer]
        - link "New user? Signup" [ref=e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e33]:
        - heading "Connect with us" [level=2] [ref=e34]
        - generic [ref=e35] [cursor=pointer]:
          - link [ref=e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=e64]:
    - generic [ref=e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e66]
      - heading "©2023 All rights reserved" [level=2] [ref=e67]
    - generic [ref=e68] [cursor=pointer]:
      - link [ref=e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e79]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | import { LoginPage } from '../pages/LoginPage.js'
  4  | import { DashboardPage } from '../pages/DashboardPage.js'
  5  | import multiUser from '../test-data/multipleUsers.json'
  6  | 
  7  | for(let user of multiUser)
  8  | {
  9  |     test(`login functionality Error scenarios ${user.id}`, async ({ page }) => {
  10 |     await page.goto('/login');
  11 | 
  12 |     const loginPage = new LoginPage(page);
  13 |     console.log(`Username is : ${user.username} and Password is ${user.password}`);
  14 | 
  15 |     await loginPage.loginToApplication(user.username, user.password);
> 16 |     expect(await loginPage.getErrorMessage()).toBe(user.message);
     |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     
  18 | })
  19 | }
  20 | 
```