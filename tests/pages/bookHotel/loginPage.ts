import { Locator, Page } from "@playwright/test";
import BasePage from "../../pages/basePage";

export class LoginPage extends BasePage {

    readonly page: Page;

    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly loginButton: Locator;
    private readonly adactinLogo: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page){
        super(page);
    
        this.usernameTextBox = page.locator(`#username`);
        this.passwordTextBox = page.locator(`#password`);
        this.loginButton = page.locator(`#login`);
        this.adactinLogo = page.locator(`//img[@alt='AdactIn Group']`);
        this.errorMessage = page.locator(`//b[contains(.,'Invalid Login details or Your Password might have expired. Click here to reset y')]`);
    }

    async clickHotelLogo(){
        await this.clickElement(this.adactinLogo);
    }

    async fillUsernameAddress(email: string){
        await this.verifyElementVisible(this.usernameTextBox);
        await this.fillElement(this.usernameTextBox, email);
    }

    async fillPassword(password: string){
        await this.verifyElementVisible(this.passwordTextBox);
        await this.fillElement(this.passwordTextBox, password);
    }

    async clickLoginButton(){
        await this.verifyElementVisible(this.loginButton);
        await this.clickElement(this.loginButton);
    }

    async loginUser(email: string, password: string){
        await this.fillUsernameAddress(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async checkErrorMessagePresent(){
        await this.verifyElementVisible(this.errorMessage);
    }

    async checkErrorMessageAbsent(){
        await this.verifyElementNotVisible(this.errorMessage);
    }

}