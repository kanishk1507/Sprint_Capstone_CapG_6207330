import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login.page";
import RequestLoanPage from "../../pages/requestLoan.page";

// Test Case  : TC-RL-UI-01 — Request Loan via UI
// Scenario   : TS-10 — Request Loan via UI

test("TC-RL-UI-01 Request Loan", async({page})=>{

    const login = new LoginPage(page);
    const loan = new RequestLoanPage(page);

    await login.navigateToLoginPage();
    await login.login();
    await loan.applyForLoan(
        "1000",
        "100"
    );
    await loan.verifyLoanProcessed();
    const status =await loan.getLoanStatus();

    expect(status).toContain("Approved");
});