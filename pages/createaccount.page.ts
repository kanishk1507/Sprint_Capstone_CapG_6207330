import{Page,Locator,expect} from "@playwright/test";
import Logger from "../utils/logger.ts";

export default class CreateAccountPage{

    page: Page;
    openNewAccountLink: Locator;
    accountTypeDropdown: Locator;
    existingAccountDropdown: Locator;
    openAccountBtn: Locator;
    successMessage: Locator;
    accountNumberLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.openNewAccountLink = page.locator("text=Open New Account");
        this.accountTypeDropdown = page.locator("#type");
        this.existingAccountDropdown = page.locator("#fromAccountId");
        this.openAccountBtn = page.locator('input[value="Open New Account"]');
        this.successMessage = page.locator("#openAccountResult");
        this.accountNumberLink = page.locator("#newAccountId");
    }

    async navigateToOpenAccount(){
        await this.openNewAccountLink.click();
    }

    async createCheckingAccount(){
        Logger.info("Creating Checking Account");
        await this.navigateToOpenAccount();
        await this.accountTypeDropdown.selectOption("0");

        await this.page.waitForTimeout(2000);

        await expect(this.openAccountBtn).toBeVisible();
        await expect(this.openAccountBtn).toBeEnabled();
        await this.openAccountBtn.click();

        Logger.success("Checking Account created successfully");
    }

    async createSavingsAccount(){
        Logger.info("Creating Savings Account");
        await this.navigateToOpenAccount();
        await this.accountTypeDropdown.selectOption("1");
        await expect(this.openAccountBtn).toBeVisible();
        await expect(this.openAccountBtn).toBeEnabled();
        await this.openAccountBtn.click();
        await expect(this.successMessage).toContainText("Account Opened!");
        Logger.success("Savings Account created successfully");
    }

    async verifyAccountCreated(){
        await expect(this.successMessage).toContainText("Congratulations");       
    }

    async getAccountNumber():Promise<string>{
        const accountNumber = await this.accountNumberLink.textContent();
        return accountNumber?.trim() || "";
    }

    async clickNewAccountNumber(){
        await this.accountNumberLink.click();
    }

    async verifyAccountDetailsPage(accountNumber: string){
        await expect(this.page).toHaveURL(/activity/);
        await expect(this.page.locator(`#accountId`)).toContainText(accountNumber);
    }

    async takeScreenshot(){
        await this.page.screenshot({
            path: "screenshots/account-created.png",
            fullPage: true
        });
    }
}