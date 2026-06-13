import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import CreateAccountPage from "../../pages/createaccount.page";

// Test Case  : TC-AC-UI-01 — Create New CHECKING Account via UI
// Scenario   : TS-01 — Successful Account Creation | TS-02 — UI Success Message Validation

test("TC-AC-UI-01 Create Checking Account", async({page})=>{

    const login = new LoginPage(page);
    const createAccount = new CreateAccountPage(page);

    await login.navigateToLoginPage();
    await login.login();

    await createAccount.createCheckingAccount();
    await createAccount.verifyAccountCreated();

    const accountNo =await createAccount.getAccountNumber();
});