import { test, expect } from "@playwright/test";
import loginData from "../../test-data/login.json";
import { getCustomerId } from "../../utils/customerUtils";
import ApiLogger from "../../utils/apiLogger";

// Test Case  : TC-API-01 — GET Accounts List Returns 200 and XML
// Scenario   : TS-03 — Account Exists in API After UI Creation

test("TC-API-01 Get Accounts List", async ({request})=>{

    const customerId = await getCustomerId(
        request,
        loginData.username,
        loginData.password
    );
    const url =`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`;

    ApiLogger.request("GET", url);

    const response = await request.get(url);

    ApiLogger.response(response.status());
    expect(response.status()).toBe(200);
    const responseText = await response.text();
    
    expect(responseText).toContain("<accounts>");
    expect(responseText).toContain("<account>");
    expect(responseText).toContain(`<customerId>${customerId}</customerId>`);

});
