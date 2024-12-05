// resources/POMs/homePage/homePage.ts
import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from "../../components/genericFunctions";

export class HomePage extends GenericFunctions {
    readonly page: Page;
    readonly linkRickSanchez: Locator;
    readonly linkMortySmith: Locator;
    readonly addButton: Locator;
    readonly topButton: Locator;
    readonly homeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.linkRickSanchez = page.locator("//div[span[normalize-space()=\"Rick Sanchez\"]]");
        this.linkMortySmith = page.locator("//div[span[normalize-space()=\"Morty Smith\"]]");
        this.addButton = page.locator("//a[normalize-space()='Add']"); //there is a irregularity on the buttons, some being <a> and the others <buttons>
        this.topButton = page.locator("//button[normalize-space()='Top']");
        this.homeButton = page.locator("//a[normalize-space()='Home']");
    }

    async isDisplayed() {
        await expect(this.topButton).toBeVisible();
        await expect(this.homeButton).toBeVisible();
    }

    async validateCharacterCard(card: Locator, name: string) {
        await expect(card.locator("h2")).toHaveText(name);
        await expect(card.locator("img")).toBeVisible();
        await expect(card.locator("text=Ver detalle")).toBeVisible();
    }
}