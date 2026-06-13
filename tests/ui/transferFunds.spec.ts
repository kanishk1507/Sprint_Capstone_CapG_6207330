import { test } from "@playwright/test";
import LoginPage from "../../pages/login.page";
import TransferFundsPage from "../../pages/transferFunds.page";

// Test Case  : TC-TF-UI-01 — Transfer Funds Between Accounts via UI
// Scenario   : TS-06 — Successful Fund Transfer via UI

test("TC-TF-UI-01 Transfer Funds", async ({ page }) => {

    const login = new LoginPage(page);
    const transferFunds =new TransferFundsPage(page);

    await login.navigateToLoginPage();
    await login.login();
    await transferFunds.transferFunds("100");
    await transferFunds.verifyTransferSuccessful();
});