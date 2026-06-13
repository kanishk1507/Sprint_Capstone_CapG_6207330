# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\negativeAccLookup.spec.ts >> TC-API-NEG-01 Invalid Account Lookup
- Location: tests\api\negativeAccLookup.spec.ts:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // Test Case  : TC-API-NEG-01 — API Returns 400 for Invalid Account ID
  4  | // Scenario   : TS-08 — Negative — Invalid Account ID in API
  5  | 
  6  | test("TC-API-NEG-01 Invalid Account Lookup", async ({ request }) => {
  7  | 
  8  |     const invalidAccountId = 12345;
  9  | 
  10 |     const response = await request.get(
  11 |         `https://parabank.parasoft.com/parabank/services/bank/accounts/${invalidAccountId}`
  12 |     );
  13 | 
> 14 |     expect(response.status()).toBe(400);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  15 | 
  16 |     const responseText = await response.text();
  17 | 
  18 |     expect(responseText)
  19 |         .toContain(`Could not find account #${invalidAccountId}`);
  20 | 
  21 | });
```