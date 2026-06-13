import {Page,Locator,expect} from "@playwright/test";

export default class AccountOverviewPage{
    page: Page;
    accountsOverviewLink: Locator;
    accountTable: Locator;
    accountNumbers: Locator;

    constructor(page: Page){
        this.page = page;
        this.accountsOverviewLink =page.getByRole("link", {name:"Accounts Overview"});
        this.accountTable = page.locator("#accountTable");
        this.accountNumbers = page.locator("#accountTable tbody tr td:first-child a");
    }

    async navigateToAccountsOverview(){
        await this.accountsOverviewLink.click();
    }

    async verifyAccountsPageLoaded(){
        await expect(this.page).toHaveURL(/overview/);
        await expect(this.accountTable).toBeVisible();
    }

    async getAllAccountNumbers(): Promise<string[]>{
        const count = await this.accountNumbers.count();
        const accounts: string[] = [];
        for(let i = 0; i < count; i++){
            const accNo = await this.accountNumbers.nth(i).textContent();
            accounts.push(accNo?.trim()||"");
        }
        return accounts;
    }

    async verifyAccountExists(accountNumber: string){
        await expect(this.page.locator(`text=${accountNumber}`)).toBeVisible();
    }
    
    async openAccount(accountNumber: string){
        await this.page.locator(`text=${accountNumber}`).click();
    }
}