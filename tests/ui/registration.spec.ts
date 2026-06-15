import {test} from "@playwright/test";
import Register from "../../pages/registration.page.ts";

// Test Case  : Registration — Skipped (test.skip)
// Scenario   : N/A     FR Coverage: FR-01

test('Registration', async ({page})=>{
 const register =new Register(page);
 await register.navigate();
 await register.registerUser();
 await register.screenshot();
});