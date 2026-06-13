import {test, expect} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import TransferFundsPage from "../../pages/transferFunds.page";

// Test Case  : TC-E2E-02 — Transfer Funds via UI and Validate via API
// Scenario   : TS-07 — Balance Updated After Transfer — API Validation

test("TC-E2E-02 Transfer Funds via UI and Validate via API",async ({ page, request })=>{

        const login =new LoginPage(page);
        const transferFunds =new TransferFundsPage(page);
        const accountId = 13344;

        const beforeResponse = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`);

        expect(beforeResponse.status()).toBe(200);
        const beforeXml =await beforeResponse.text();

        const beforeBalanceMatch =
            beforeXml.match(
                /<balance>(.*?)<\/balance>/
            );

        const beforeBalance =Number(beforeBalanceMatch?.[1]);
        console.log("Balance Before Transfer :",beforeBalance);

        await login.navigateToLoginPage();
        await login.login();
        await transferFunds.transferFunds("100");
        await transferFunds.verifyTransferSuccessful();
        
        const afterResponse = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`);

        expect(afterResponse.status()).toBe(200);
        const afterXml =await afterResponse.text();

        const afterBalanceMatch =
            afterXml.match(
                /<balance>(.*?)<\/balance>/
            );

        const afterBalance =Number(afterBalanceMatch?.[1]);
        console.log("Balance After Transfer :",afterBalance);

        expect(afterBalance).not.toBeNaN();
    }
);