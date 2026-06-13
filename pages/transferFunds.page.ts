import {Page,Locator,expect} from "@playwright/test";
import Logger from "../utils/logger.ts";

export default class TransferFundsPage{

    page: Page;
    transferFundsLink: Locator;
    amountTxt: Locator;
    fromAccountDropdown: Locator;
    toAccountDropdown: Locator;
    transferBtn: Locator;
    successMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.transferFundsLink = page.locator("text=Transfer Funds");
        this.amountTxt = page.locator("#amount");
        this.fromAccountDropdown = page.locator("#fromAccountId");
        this.toAccountDropdown = page.locator("#toAccountId");
        this.transferBtn = page.locator('input[value="Transfer"]');
        this.successMessage = page.locator("#showResult");
    }

    async navigateToTransferFunds(){
        await this.transferFundsLink.click();
    }

    async transferFunds(amount: string){
        Logger.info("Initiating fund transfer");
        await this.navigateToTransferFunds();
        await this.amountTxt.fill(amount);
        await this.transferBtn.click();
        Logger.success("Fund transfer initiated");
    }

    async verifyTransferSuccessful(){
        await expect(this.successMessage).toContainText("Transfer Complete");
    }

    async takeScreenshot(){
        await this.page.screenshot({
            path: "screenshots/transfer-funds.png",
            fullPage: true
        });
    }
}