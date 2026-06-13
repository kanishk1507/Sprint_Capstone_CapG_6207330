import {test,expect} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import CreateAccountPage from "../../pages/createaccount.page";

// Test Case  : TC-E2E-01 — Create Account via UI and Validate via API
// Scenario   : TS-03 — Account Exists in API After UI Creation

test("TC-E2E-01 Create Account via UI and Validate via API",async ({page,request})=>{

        const login =new LoginPage(page);
        const createAccount =new CreateAccountPage(page);

        await login.navigateToLoginPage();
        await login.login();
        await createAccount.createCheckingAccount();
        await createAccount.verifyAccountCreated();

        const response = await request.get("https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts");

        expect(response.status()).toBe(200);

        const responseText =await response.text();
        console.log(responseText);
        expect(responseText).toContain("<accounts>");

    }
);