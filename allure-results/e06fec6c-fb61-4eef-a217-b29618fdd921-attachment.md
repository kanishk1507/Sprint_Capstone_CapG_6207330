# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\createCheckingAccount.spec.ts >> TC-AC-UI-01 Create Checking Account
- Location: tests\ui\createCheckingAccount.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[value="Open New Account"]')
    - locator resolved to <input type="button" class="button" value="Open New Account"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome John Smith
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING" [selected]
            - option "SAVINGS"
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "12345" [selected]
            - option "12456"
            - option "12567"
            - option "12678"
            - option "12789"
            - option "12900"
            - option "13011"
            - option "13122"
            - option "13233"
            - option "13344"
            - option "54321"
          - button "Open New Account" [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import{Page,Locator,expect} from "@playwright/test";
  2  | import Logger from "../utils/logger.ts";
  3  | 
  4  | export default class CreateAccountPage{
  5  | 
  6  |     page: Page;
  7  |     openNewAccountLink: Locator;
  8  |     accountTypeDropdown: Locator;
  9  |     existingAccountDropdown: Locator;
  10 |     openAccountBtn: Locator;
  11 |     successMessage: Locator;
  12 |     accountNumberLink: Locator;
  13 | 
  14 |     constructor(page: Page){
  15 |         this.page = page;
  16 |         this.openNewAccountLink = page.locator("text=Open New Account");
  17 |         this.accountTypeDropdown = page.locator("#type");
  18 |         this.existingAccountDropdown = page.locator("#fromAccountId");
  19 |         this.openAccountBtn = page.locator('input[value="Open New Account"]');
  20 |         this.successMessage = page.locator("#openAccountResult");
  21 |         this.accountNumberLink = page.locator("#newAccountId");
  22 |     }
  23 | 
  24 |     async navigateToOpenAccount(){
  25 |         await this.openNewAccountLink.click();
  26 |     }
  27 | 
  28 |     async createCheckingAccount(){
  29 |         Logger.info("Creating Checking Account");
  30 |         await this.navigateToOpenAccount();
  31 |         await this.accountTypeDropdown.selectOption("0");
  32 | 
  33 |         await this.page.waitForTimeout(2000);
  34 | 
  35 |         await expect(this.openAccountBtn).toBeVisible();
  36 |         await expect(this.openAccountBtn).toBeEnabled();
> 37 |         await this.openAccountBtn.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  38 | 
  39 |         Logger.success("Checking Account created successfully");
  40 |     }
  41 | 
  42 |     async createSavingsAccount(){
  43 |         Logger.info("Creating Savings Account");
  44 |         await this.navigateToOpenAccount();
  45 |         await this.accountTypeDropdown.selectOption("1");
  46 |         await expect(this.openAccountBtn).toBeVisible();
  47 |         await expect(this.openAccountBtn).toBeEnabled();
  48 |         await this.openAccountBtn.click();
  49 |         await expect(this.successMessage).toContainText("Account Opened!");
  50 |         Logger.success("Savings Account created successfully");
  51 |     }
  52 | 
  53 |     async verifyAccountCreated(){
  54 |         await expect(this.successMessage).toContainText("Congratulations");       
  55 |     }
  56 | 
  57 |     async getAccountNumber():Promise<string>{
  58 |         const accountNumber = await this.accountNumberLink.textContent();
  59 |         return accountNumber?.trim() || "";
  60 |     }
  61 | 
  62 |     async clickNewAccountNumber(){
  63 |         await this.accountNumberLink.click();
  64 |     }
  65 | 
  66 |     async verifyAccountDetailsPage(accountNumber: string){
  67 |         await expect(this.page).toHaveURL(/activity/);
  68 |         await expect(this.page.locator(`#accountId`)).toContainText(accountNumber);
  69 |     }
  70 | 
  71 |     async takeScreenshot(){
  72 |         await this.page.screenshot({
  73 |             path: "screenshots/account-created.png",
  74 |             fullPage: true
  75 |         });
  76 |     }
  77 | }
```