import { Locator, Page } from "@playwright/test";
import BasePage  from "../basePage";

export class SearchHotel extends BasePage {

    readonly page: Page;

    private readonly locationDropDown: Locator;
    private readonly hotelsDropDown: Locator;
    private readonly roomTypeDropDown: Locator;
    private readonly numberOfRoomsDropDown: Locator;
    private readonly checkInDate: Locator;
    private readonly checkOutDate: Locator;
    private readonly adultPerRoomDropDown: Locator;
    private readonly childrenPerRoomDropDown: Locator;
    private readonly searchButton: Locator;
    private readonly resetButton: Locator;
    private readonly adactinLogo: Locator;

    constructor(page: Page) {
        super(page);


        this.locationDropDown = page.locator("#location");
        this.hotelsDropDown = page.locator("#hotels");
        this.roomTypeDropDown = page.locator("#room_type");
        this.numberOfRoomsDropDown = page.locator("#room_nos");
        this.checkInDate = page.locator("#datepick_in");
        this.checkOutDate = page.locator("#datepick_out");
        this.adultPerRoomDropDown = page.locator("#adult_room");
        this.childrenPerRoomDropDown = page.locator("#child_room");
        this.searchButton = page.locator("#Submit");
        this.resetButton = page.locator(`#Reset`);
        this.adactinLogo = page.locator(`//img[@alt='AdactIn Group']`);
        
    }

    async selectLocation(locationValue: string) {
        await this.waitForElementVisible(this.locationDropDown);
        await this.locationDropDown.selectOption({ label: locationValue });
    }

    async selectHotel(hotelValue: string) {
        await this.waitForElementVisible(this.hotelsDropDown);
        await this.hotelsDropDown.selectOption({ label: hotelValue });
    }

    async selectRoomType(roomTypeValue: string) {
        await this.waitForElementVisible(this.roomTypeDropDown);
        await this.roomTypeDropDown.selectOption({ label: roomTypeValue });
    }

    async selectNumberOfRooms(numberOfRoomsValue: string) {
        await this.waitForElementVisible(this.numberOfRoomsDropDown);
        await this.numberOfRoomsDropDown.selectOption({ label: numberOfRoomsValue });
    }

    async fillCheckInDate(checkInDateValue: string){
        await this.verifyElementVisible(this.checkInDate);
        await this.fillElement(this.checkInDate, checkInDateValue);
    }

    async fillCheckOutDate(checkOutDateValue: string){
        await this.verifyElementVisible(this.checkOutDate);
        await this.fillElement(this.checkOutDate, checkOutDateValue);
    }

    async selectAdultPerRoom(adultPerRoomValue: string){
        await this.waitForElementVisible(this.adultPerRoomDropDown);
        await this.adultPerRoomDropDown.selectOption({ label: adultPerRoomValue });
    }

    async selectChildrenPerRoom(childrenPerRoomValue: string){
        await this.waitForElementVisible(this.childrenPerRoomDropDown);
        await this.childrenPerRoomDropDown.selectOption({ label: childrenPerRoomValue });
    }

    async clickAdctinLogo(){
        await this.verifyElementVisible(this.adactinLogo);
        await this.clickElement(this.adactinLogo);
    }

    async clickSearchButton(){
        await this.clickElement(this.searchButton);
    }

    async clickResetButton(){
        await this.clickElement(this.resetButton);
    }

    async fillDataAndsearchHotel(
        locationValue: string,
        hotelValue: string,
        roomTypeValue: string,
        numberOfRoomsValue: string,
        checkInDateValue: string,
        checkOutDateValue: string,
        adultPerRoomValue: string,
        childrenPerRoomValue: string,
    
    ){
        await this.selectLocation(locationValue);
        await this.selectHotel(hotelValue);
        await this.selectRoomType(roomTypeValue);
        await this.selectNumberOfRooms(numberOfRoomsValue);
        await this.fillCheckInDate(checkInDateValue);
        await this.fillCheckOutDate(checkOutDateValue);
        await this.selectAdultPerRoom(adultPerRoomValue);
        await this.selectChildrenPerRoom(childrenPerRoomValue);
    }


}