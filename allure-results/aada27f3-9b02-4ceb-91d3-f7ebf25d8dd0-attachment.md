# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\createAccandValidateAPI.spec.ts >> TC-E2E-01 Create Account via UI and Validate via API
- Location: tests\e2e\createAccandValidateAPI.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Open New Account')

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
> 25 |         await this.openNewAccountLink.click();
     |                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  37 |         await this.openAccountBtn.click();
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