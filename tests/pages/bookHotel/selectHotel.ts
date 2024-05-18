import {Locator, Page } from "@playwright/test";
import BasePage from "../basePage";

export class SelectHotel extends BasePage {

    readonly page: Page;

    private readonly selectRadioButton: Locator;
    private readonly continueButton: Locator;
    private readonly adactinLogo: Locator;
    private readonly cancelButton: Locator;

    constructor(page: Page){
        super(page);

        this.selectRadioButton = page.locator(`[type='radio']`);
        this.continueButton = page.locator(`#continue`);
        this.adactinLogo = page.locator(`//img[@alt='AdactIn Group']`);
        this.cancelButton = page.locator(`#cancel`);
    }

    async clickAdactinLogo(){
        await this.verifyElementVisible(this.adactinLogo);
        await this.clickElement(this.adactinLogo);
    }

    async clickRadioButton(){
        await this.verifyElementVisible(this.selectRadioButton);
        await this.clickElement(this.selectRadioButton);
    }

    async clickContinueButton(){
        await this.verifyElementVisible(this.continueButton);
        await this.clickElement(this.continueButton);
    }

    async clickCancelButton(){
        await this.verifyElementVisible(this.cancelButton);
        await this.clickElement(this.cancelButton);
    }

    async selectHotel(){
        await this.clickRadioButton();
    }
}