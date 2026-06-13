import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import UpdateContactInfoPage from "../../pages/updateContactInfo.page";

// Test Case  : TC-UCI-UI-01 — Update Contact Information via UI
// Scenario   : TS-11 — Update Contact Information via UI

test("TC-UCI-UI-01 Update Contact Information",async ({ page })=>{
        const login =new LoginPage(page);
        const updateProfile =new UpdateContactInfoPage(page);
        await login.navigateToLoginPage();
        await login.login();
        await updateProfile.updateContactInfo();
        await updateProfile.verifyUpdateSuccessful();
        await updateProfile.screenshot();
    }
);