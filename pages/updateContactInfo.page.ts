import {Page,Locator,expect} from "@playwright/test";
export default class UpdateContactInfoPage {

    page: Page;

    updateContactInfoLink: Locator;
    firstNameTxt: Locator;
    lastNameTxt: Locator;
    addressTxt: Locator;
    cityTxt: Locator;
    stateTxt: Locator;
    zipCodeTxt: Locator;
    phoneTxt: Locator;
    updateProfileBtn: Locator;
    successMessage: Locator;

    constructor(page: Page){

        this.page = page;
        this.updateContactInfoLink = page.getByRole("link", {name: "Update Contact Info"});
        this.firstNameTxt = page.locator("#customer\\.firstName");
        this.lastNameTxt = page.locator("#customer\\.lastName");
        this.addressTxt = page.locator("#customer\\.address\\.street");
        this.cityTxt =page.locator("#customer\\.address\\.city");
        this.stateTxt =page.locator("#customer\\.address\\.state");
        this.zipCodeTxt = page.locator("#customer\\.address\\.zipCode");
        this.phoneTxt = page.locator("#customer\\.phoneNumber");
        this.updateProfileBtn = page.locator('input[value="Update Profile"]');
        this.successMessage = page.locator("#updateProfileResult");
    }
    async navigateToUpdateContactInfo(){
        await this.updateContactInfoLink.click();
    }

    async updateContactInfo(){

        await this.navigateToUpdateContactInfo();
        await this.addressTxt.fill("Sector 21");
        await this.cityTxt.fill("Gurgaon");
        await this.stateTxt.fill("Haryana");
        await this.zipCodeTxt.fill("122001");
        await this.phoneTxt.fill("9876543210");
        await this.updateProfileBtn.click();

    }

    async verifyUpdateSuccessful(){
        await expect(this.successMessage).toContainText("Profile Updated");
    }

    async screenshot(){
        await this.page.screenshot({
            path: "screenshots/updateProfile.png",
            fullPage: true
        });
    }
}