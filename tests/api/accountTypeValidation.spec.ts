import { test, expect } from "@playwright/test";
import { getCustomerId } from "../../utils/customerUtils";
import loginData from "../../test-data/login.json";
import ApiLogger from "../../utils/apiLogger";

// Test Case  : TC-API-02 — Account Types are CHECKING or SAVINGS
// Scenario   : TS-04 — Account Type & Details Validation via API

test("TC-API-02 Validate Account Type", async ({request})=>{

    const customerId = await getCustomerId(
        request,
        loginData.username,
        loginData.password
    );

    const url =`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`;
    ApiLogger.request("GET", url);

    const response =await request.get(url);

    ApiLogger.response(response.status());
    expect(response.status()).toBe(200);
    const responseText = await response.text();

    const accountTypeMatch = responseText.match(/<type>(.*?)<\/type>/);
    expect(accountTypeMatch).not.toBeNull();
    const accountType = accountTypeMatch?.[1];

    expect(
        ["CHECKING", "SAVINGS"]
    ).toContain(accountType);

});