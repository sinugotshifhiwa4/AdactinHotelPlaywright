import { test as baseTest} from "@playwright/test";

import { LoginPage } from "../tests/pages/bookHotel/loginPage";
import { SearchHotel } from "../tests/pages/bookHotel/searchHotelPage";
import { SelectHotel } from "../tests/pages/bookHotel/selectHotel";
import { BookHotel } from "../tests/pages/bookHotel/bookHotel";

type pages = {

    loginPage: LoginPage;
    searchHotel: SearchHotel;
    selectHotel: SelectHotel;
    bookHotel: BookHotel;

};

const testPages = baseTest.extend<pages>({

    loginPage: async ({page}, use) =>{
        await use(new LoginPage(page));
    },

    searchHotel: async ({page}, use) =>{
        await use(new SearchHotel(page));
    },

    selectHotel: async ({page}, use) =>{
        await use(new SelectHotel(page));
    },

    bookHotel: async ({page}, use) =>{
        await use(new BookHotel(page));
    },
});

export const test = testPages;
export const expect = testPages.expect;