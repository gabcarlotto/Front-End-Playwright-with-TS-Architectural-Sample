import { test } from '@playwright/test';
import Characters from "./../../resources/data/characters.json";
import { HomePage } from '../../POMs/homePage/homePage';
import { MortySmithPage } from '../../POMs/homePage/mortySmithPage';
import { RickSanchezPage } from '../../POMs/homePage/rickSanchezPage';
import { NewCharacterPage } from '../../POMs/newCharacterPage';


let homePage: HomePage;
let rickSanchezPage: RickSanchezPage;
let mortySmithPage: MortySmithPage;
let newCharacterPage: NewCharacterPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    rickSanchezPage = new RickSanchezPage(page);
    mortySmithPage = new MortySmithPage(page);
    newCharacterPage = new NewCharacterPage(page);

    await page.goto('https://vue-aknxx1.stackblitz.io/');
});

test.describe('Home Page Tests', () => {

    test('Validate Rick Sanchez details', async ({ page }) => {
        await homePage.isDisplayed();
        await homePage.clickAndWaitForNavigation(homePage.linkRickSanchez);
        await rickSanchezPage.isDisplayed();
        await rickSanchezPage.validateCharacterData(Characters.RickSanchez);
    });

    test('Validate Morty Smith details', async ({ page }) => {
        await homePage.isDisplayed();
        await homePage.clickAndWaitForNavigation(homePage.linkMortySmith);
        await mortySmithPage.isDisplayed();
        await mortySmithPage.validateCharacterData(Characters.MortySmith);
    });

    // ... other tests ...
});