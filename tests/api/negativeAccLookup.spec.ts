import { test, expect } from "@playwright/test";

// Test Case  : TC-API-NEG-01 — API Returns 400 for Invalid Account ID
// Scenario   : TS-08 — Negative — Invalid Account ID in API

test("TC-API-NEG-01 Invalid Account Lookup", async ({ request }) => {

    const invalidAccountId = 999999;

    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/accounts/${invalidAccountId}`
    );

    expect(response.status()).toBe(400);

    const responseText = await response.text();

    expect(responseText)
        .toContain(`Could not find account #${invalidAccountId}`);

});