import { test } from "@playwright/test";
import LoginPage from "../../pages/login.page";
import CreateAccountPage from "../../pages/createaccount.page.ts";

// Test Case  : TC-AC-UI-02 — Create New SAVINGS Account via UI
// Scenario   : TS-01 — Successful Account Creation | TS-12 — Data-Driven Account Type Creation

test("TC-AC-UI-02 Create Savings Account", async ({page})=>{

    const login = new LoginPage(page);
    const createAccount = new CreateAccountPage(page);

    await login.navigateToLoginPage();
    await login.login();
    await createAccount.createSavingsAccount();
    await createAccount.verifyAccountCreated();

    const accountNo =await createAccount.getAccountNumber();
});