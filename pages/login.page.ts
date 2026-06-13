import {Page,Locator,expect} from "@playwright/test";
import loginData from "../test-data/login.json";
import Logger from "../utils/logger.ts";

export default class LoginPage{

    page: Page;
    usernameTxt: Locator;
    passwordTxt: Locator;
    loginBtn: Locator;
    logoutBtn: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameTxt = page.locator('input[name="username"]');
        this.passwordTxt = page.locator('input[name="password"]');
        this.loginBtn = page.locator('input[value="Log In"]');
        this.logoutBtn = page.locator('text=Log Out');
    }

    async navigateToLoginPage(){
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
    }

    async login(){
        Logger.info("Entering login credentials");
        await this.usernameTxt.fill(loginData.username);
        await this.passwordTxt.fill(loginData.password);
        await this.loginBtn.click();
        Logger.success("Login successful");
    }

    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/overview/);
        await expect(this.page.getByRole("heading", { name: "Accounts Overview" })).toBeVisible();
    }

    async logout(){
        await this.logoutBtn.click();
    }

    async verifyLogoutSuccess(){
        await expect(this.loginBtn).toBeVisible();
    }
}