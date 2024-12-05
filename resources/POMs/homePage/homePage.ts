// resources/POMs/homePage/homePage.ts
import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from "../../components/genericFunctions";

export class HomePage extends GenericFunctions {
    readonly page: Page;
    readonly linkRickSanchez: Locator;
    readonly linkMortySmith: Locator;
    readonly addButton: Locator;
    readonly topButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.linkRickSanchez = page.locator("//div[span[normalize-space()=\"Rick Sanchez\"]]");
        this.linkMortySmith = page.locator("//div[span[normalize-space()=\"Morty Smith\"]]");
        this.addButton = page.locator("text=Add");
        this.topButton = page.locator("text=Top");
    }

    async isDisplayed() {
        await expect(this.addButton).toBeVisible();
        await expect(this.topButton).toBeVisible();
    }

    async validateCharacterCard(card: Locator, name: string) {
        await expect(card.locator("h2")).toHaveText(name);
        await expect(card.locator("img")).toBeVisible();
        await expect(card.locator("text=Ver detalle")).toBeVisible();
    }
}