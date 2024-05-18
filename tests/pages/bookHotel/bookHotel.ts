import { Locator, Page } from "@playwright/test";
import BasePage from "../basePage";

export class BookHotel extends BasePage {

    readonly page: Page;

    private readonly firstNameTextBox: Locator;
    private readonly lastNameTextBox: Locator;
    private readonly addressTextBox: Locator;
    private readonly creditCardNumberTextBox: Locator;
    private readonly creditCardTypeDropDown: Locator;
    private readonly creditCardExpiryMonthDropDown: Locator;
    private readonly creditCardExpiryYearDropDown: Locator;
    private readonly cvvNumber: Locator;
    private readonly bookNowButton: Locator;
    private readonly adactinLogo: Locator;
    private readonly cancelButton: Locator;

    constructor(page: Page){
        super(page);

        this.firstNameTextBox = page.locator(`#first_name`);
        this.lastNameTextBox = page.locator(`#last_name`);
        this.addressTextBox = page.locator(`#address`);
        this.creditCardNumberTextBox = page.locator(`#cc_num`);
        this.creditCardTypeDropDown = page.locator(`#cc_type`);
        this.creditCardExpiryMonthDropDown = page.locator(`#cc_exp_month`);
        this.creditCardExpiryYearDropDown = page.locator(`#cc_exp_year`);
        this.cvvNumber = page.locator(`#cc_cvv`);
        this.bookNowButton = page.locator(`#book_now`);
        this.adactinLogo = page.locator(`//img[@alt='AdactIn Group']`);
        this.cancelButton = page.locator(`#cancel`);
    }

    async clickAdactinLogo(){
        await this.clickElement(this.adactinLogo);
    }

    async fillFirstName(firstName: string){
        await this.verifyElementVisible(this.firstNameTextBox);
        await this.fillElement(this.firstNameTextBox, firstName);
    }

    async fillLastName(lastName: string){
        await this.verifyElementVisible(this.lastNameTextBox);
        await this.fillElement(this.lastNameTextBox, lastName);
    }

    async fillBillingAddress(address: string){
        await this.verifyElementVisible(this.addressTextBox);
        await this.fillElement(this.addressTextBox, address);
    }

    async fillCreditCardNumber(creditCardNumber: string){
        await this.verifyElementVisible(this.creditCardNumberTextBox);
        await this.fillElement(this.creditCardNumberTextBox, creditCardNumber);
    }

    async selectCreditCardType(creditCardTypeValue: string) {
        await this.waitForElementVisible(this.creditCardTypeDropDown);
        await this.creditCardTypeDropDown.selectOption({ label: creditCardTypeValue });
    }

    async selectCreditCardExpiryMonth(creditCardExpiryMonthValue: string) {
        await this.waitForElementVisible(this.creditCardExpiryMonthDropDown);
        await this.creditCardExpiryMonthDropDown.selectOption({ label: creditCardExpiryMonthValue });
    }

    async selectCreditCardExpiryYear(creditCardExpiryYearValue: string) {
        await this.waitForElementVisible(this.creditCardExpiryYearDropDown);
        await this.creditCardExpiryYearDropDown.selectOption({ label: creditCardExpiryYearValue });
    }

    async fillCvvNumber(cvvNumber: string){
        await this.verifyElementVisible(this.cvvNumber);
        await this.fillElement(this.cvvNumber, cvvNumber);
    }

    async clickBookNowButton(){
        await this.verifyElementVisible(this.bookNowButton);
        await this.clickElement(this.bookNowButton);
    }

    async clickCancelButton(){
        await this.verifyElementVisible(this.cancelButton);
        await this.clickElement(this.cancelButton);
    }

    async bookHotel(
        firstName: string,
        lastName: string,
        address: string,
        creditCardNumber: string,
        creditCardType: string,
        creditCardExpiryMonth: string,
        creditCardExpiryYear,
        cvvNumber: string
    ){
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillBillingAddress(address);
        await this.fillCreditCardNumber(creditCardNumber);
        await this.selectCreditCardType(creditCardType);
        await this.selectCreditCardExpiryMonth(creditCardExpiryMonth);
        await this.selectCreditCardExpiryYear(creditCardExpiryYear);
        await this.fillCvvNumber(cvvNumber);
    
    }

}