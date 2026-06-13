import {test,expect} from "@playwright/test";
import { getCustomerId } from "../../utils/customerUtils";
import loginData from "../../test-data/login.json";
import { getAccountId } from "../../utils/accountUtils";
import ApiLogger from "../../utils/apiLogger";

// Test Case  : TC-API-05 — GET Transactions for an Account
// Scenario   : TS-04 — Account Type & Details Validation via API

test("TC-API-05 Validate Account Transactions API", async({request})=>{

    const customerId = await getCustomerId(
        request,
        loginData.username,
        loginData.password
    );

    const accountId = await getAccountId(
        request,
        customerId
    );

    const url =`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}/transactions`;

    ApiLogger.request("GET",url);
    const response = await request.get(url);
    ApiLogger.response(response.status());

    expect(response.status()).toBe(200);
    const responseText = await response.text();
    expect(responseText).toContain("<transactions");

});