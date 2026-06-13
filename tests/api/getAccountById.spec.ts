import { test, expect } from "@playwright/test";
import { getCustomerId } from "../../utils/customerUtils";
import { getAccountId } from "../../utils/accountUtils";
import loginData from "../../test-data/login.json";
import ApiLogger from "../../utils/apiLogger";

// Test Case  : TC-API-03 — GET Account by ID — Validate XML Fields
// Scenario   : TS-04 — Account Type & Details Validation via API

test("TC-API-03 Get Account By ID", async ({request})=>{

    const customerId = await getCustomerId(
        request,
        loginData.username,
        loginData.password
    );

    const accountId = await getAccountId(
        request,
        customerId
    );
    const url =`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`;

    ApiLogger.request("GET", url);
    const response =await request.get(url);

    ApiLogger.response(response.status());

    expect(response.status()).toBe(200);
    const responseText = await response.text();
    
    expect(responseText).toContain(`<id>${accountId}</id>`);
    expect(responseText).toContain("<customerId>");
    expect(responseText).toContain("<type>");
    expect(responseText).toContain("<balance>");

});