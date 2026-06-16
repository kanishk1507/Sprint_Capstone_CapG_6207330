# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\requestLoan.spec.ts >> TC-RL-UI-01 Request Loan
- Location: tests\ui\requestLoan.spec.ts:8:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Approved"
Received string:    "Denied"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome John Smith
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Loan Request Processed" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - 'row "Loan Provider: Wealth Securities Dynamic Loans (WSDL)" [ref=e54]':
              - cell "Loan Provider:" [ref=e55]
              - cell "Wealth Securities Dynamic Loans (WSDL)" [ref=e56]
            - 'row "Date: 06-16-2026" [ref=e57]':
              - cell "Date:" [ref=e58]
              - cell "06-16-2026" [ref=e59]
            - 'row "Status: Denied" [ref=e60]':
              - cell "Status:" [ref=e61]
              - cell "Denied" [ref=e62]
        - paragraph [ref=e64]: You do not have sufficient funds for the given down payment.
  - generic [ref=e66]:
    - list [ref=e67]:
      - listitem [ref=e68]:
        - link "Home" [ref=e69] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "About Us" [ref=e71] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e72]:
        - link "Services" [ref=e73] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e74]:
        - link "Products" [ref=e75] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e76]:
        - link "Locations" [ref=e77] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e78]:
        - link "Forum" [ref=e79] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e80]:
        - link "Site Map" [ref=e81] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e82]:
        - link "Contact Us" [ref=e83] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e84]: © Parasoft. All rights reserved.
    - list [ref=e85]:
      - listitem [ref=e86]: "Visit us at:"
      - listitem [ref=e87]:
        - link "www.parasoft.com" [ref=e88] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import LoginPage from "../../pages/login.page";
  3  | import RequestLoanPage from "../../pages/requestLoan.page";
  4  | 
  5  | // Test Case  : TC-RL-UI-01 — Request Loan via UI
  6  | // Scenario   : TS-10 — Request Loan via UI
  7  | 
  8  | test("TC-RL-UI-01 Request Loan", async({page})=>{
  9  | 
  10 |     const login = new LoginPage(page);
  11 |     const loan = new RequestLoanPage(page);
  12 | 
  13 |     await login.navigateToLoginPage();
  14 |     await login.login();
  15 |     await loan.applyForLoan(
  16 |         "10000",
  17 |         "1000"
  18 |     );
  19 |     await loan.verifyLoanProcessed();
  20 |     const status =await loan.getLoanStatus();
  21 | 
> 22 |     expect(status).toContain("Approved");
     |                    ^ Error: expect(received).toContain(expected) // indexOf
  23 | });
```