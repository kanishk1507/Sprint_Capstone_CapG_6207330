import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import AccountOverviewPage from "../../pages/accountOverview.page";

// Test Case  : TC-AO-UI-01 — Verify Account Overview Page Loads
// Scenario   : TS-09 — Account Overview Page Loads Correctly

test("TC-AO-UI-01 Verify Account Overview", async ({page})=>{

    const login = new LoginPage(page);
    const overview =new AccountOverviewPage(page);
    
    await login.navigateToLoginPage();
    await login.login();
    await overview.navigateToAccountsOverview();
    await overview.verifyAccountsPageLoaded();

    const accounts =await overview.getAllAccountNumbers();

});