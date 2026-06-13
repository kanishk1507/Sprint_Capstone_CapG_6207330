import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";

// Test Case  : TC-LOGIN-01 — Valid Login with Correct Credentials
// Scenario   : TS-08 — Negative / Login Validation

test.describe("TC-LOGIN-01",()=>{

    test("Valid Login with Correct Credentials", async ({page})=>{
        const login = new LoginPage(page);
        await login.navigateToLoginPage();
        await login.login();
        await login.verifyLoginSuccess();
    });

});