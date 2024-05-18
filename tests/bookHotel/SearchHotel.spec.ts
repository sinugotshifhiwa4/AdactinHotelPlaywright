import {test, expect} from "../../fixtures/pomFixtures";

test.beforeEach(async ({page, loginPage}) =>{

    await page.goto(`https://adactinhotelapp.com/`);
    await loginPage.loginUser("tshifhiwalunah", "1760MP");
});

test("Fill search hotel data and click reset", async ({searchHotel}) =>{

    await searchHotel.fillDataAndsearchHotel(
     "Paris",
     "Hotel Hervey",
     "Deluxe",
     "3 - Three",
     "10/05/2024",
     "21/05/2024",
     "2 - Two",
     "0 - None"
    ) 

    await searchHotel.clickResetButton();
 });

test("Search Hotel", async ({searchHotel}) =>{

   await searchHotel.fillDataAndsearchHotel(
    "New York",
    "Hotel Hervey",
    "Deluxe",
    "4 - Four",
    "06/05/2024",
    "19/05/2024",
    "2 - Two",
    "1 - One"
   );

   await searchHotel.clickSearchButton();
});

test("Select Hotel and click cancel", async ({searchHotel, selectHotel}) =>{

    await searchHotel.fillDataAndsearchHotel(
        "New York",
        "Hotel Hervey",
        "Deluxe",
        "4 - Four",
        "06/05/2024",
        "19/05/2024",
        "2 - Two",
        "1 - One"
       );
    
       await searchHotel.clickSearchButton();
       await selectHotel.selectHotel();
       await selectHotel.clickCancelButton();
    
});

test("Select Hotel", async ({searchHotel, selectHotel}) =>{

    await searchHotel.fillDataAndsearchHotel(
        "New York",
        "Hotel Hervey",
        "Deluxe",
        "4 - Four",
        "06/05/2024",
        "19/05/2024",
        "2 - Two",
        "1 - One"
       );
    
       await searchHotel.clickSearchButton();
       await selectHotel.selectHotel();
       await selectHotel.clickContinueButton();
    
});

test("Fill Book Hotel Data and Cancel", async ({searchHotel, selectHotel, bookHotel}) =>{

    await searchHotel.fillDataAndsearchHotel(
        "New York",
        "Hotel Hervey",
        "Deluxe",
        "4 - Four",
        "06/05/2024",
        "19/05/2024",
        "2 - Two",
        "1 - One"
       );
    
       await searchHotel.clickSearchButton();
       await selectHotel.selectHotel();
       await selectHotel.clickContinueButton();

       await bookHotel.bookHotel(
        "Foden",
        "Phil",
        "77 West St, Houghton Estate, Rosebank, 2196",
        "4701322211111234",
        "VISA",
        "December",
        "2026",
        "837"
       );

       await bookHotel.clickCancelButton();    
});

test("Fill Book Hotel Data And Book Hotel", async ({searchHotel, selectHotel, bookHotel}) =>{

    await searchHotel.fillDataAndsearchHotel(
        "New York",
        "Hotel Hervey",
        "Deluxe",
        "4 - Four",
        "06/05/2024",
        "19/05/2024",
        "2 - Two",
        "1 - One"
       );
    
       await searchHotel.clickSearchButton();
       await selectHotel.selectHotel();
       await selectHotel.clickContinueButton();

       await bookHotel.bookHotel(
        "Foden",
        "Phil",
        "77 West St, Houghton Estate, Rosebank, 2196",
        "4701322211111234",
        "VISA",
        "December",
        "2026",
        "837"
       );

       await bookHotel.clickBookNowButton();
});
