import { test, expect} from "../../fixtures/pomFixtures";

test.beforeEach(async ({page, loginPage}) =>{

    await page.goto(`https://adactinhotelapp.com/`);

});

test("Test Login", async ({loginPage}) =>{
    await loginPage.loginUser("tshifhiwalunah", "1760MP");
})