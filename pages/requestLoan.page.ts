import {Page,Locator,expect} from "@playwright/test";
import Logger from "../utils/logger.ts";

export default class RequestLoanPage{

    page: Page;

    requestLoanLink: Locator;
    loanAmountTxt: Locator;
    downPaymentTxt: Locator;
    applyNowBtn: Locator;
    resultSection: Locator;
    statusText: Locator;

    constructor(page:Page){

        this.page = page;
        this.requestLoanLink = page.getByRole("link", { name: "Request Loan"});

        this.loanAmountTxt = page.locator("#amount");
        this.downPaymentTxt = page.locator("#downPayment");
        this.applyNowBtn = page.locator('input[value="Apply Now"]');
        this.resultSection = page.locator("#requestLoanResult");
        this.statusText = page.locator("#loanStatus");
    }

    async navigateToRequestLoan(){
        await this.requestLoanLink.click();
    }

    async applyForLoan(
        amount: string,
        downPayment: string
    ){
        
        Logger.info("Applying for loan");
        await this.navigateToRequestLoan();
        await this.loanAmountTxt.fill(amount);
        await this.downPaymentTxt.fill(downPayment);
        await this.applyNowBtn.click();
        Logger.success("Loan application submitted");
    }

    async verifyLoanProcessed(){
        await expect(this.resultSection).toBeVisible();
    }

    async getLoanStatus(): Promise<string>{
        return (
            await this.statusText.textContent()
        )?.trim() || "";
    }

    async screenshot(){
        await this.page.screenshot({
            path: "screenshots/loanRequest.png",
            fullPage: true
        });
    }
}