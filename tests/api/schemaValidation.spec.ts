import { test, expect } from "@playwright/test";
import { getCustomerId } from "../../utils/customerUtils";
import loginData from "../../test-data/login.json";
import { getAccountId } from "../../utils/accountUtils";
import ApiLogger from "../../utils/apiLogger";

// Test Case  : TC-API-04 — Schema Validation — Required XML Tags Present
// Scenario   : TS-05 — Schema Validation of API Response (XML)

test("TC-API-04 Validate Account Response Schema", async ({request})=>{

    const customerId = await getCustomerId(
        request,
        loginData.username,
        loginData.password
    );

    const accountId = await getAccountId(
        request,
        customerId
    );

    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`);
    expect(response.status()).toBe(200);
    const responseText = await response.text();
    

    const requiredTags = [
        "<id>",
        "<customerId>",
        "<type>",
        "<balance>"
    ];

    for (const tag of requiredTags) {
        expect(responseText).toContain(tag);
    }
});