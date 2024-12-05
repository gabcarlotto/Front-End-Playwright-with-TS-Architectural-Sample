// Similar to rickSanchezPage.ts, but adjust locators if needed
import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from "../../components/genericFunctions";

export class MortySmithPage extends GenericFunctions {
    readonly page: Page;
    readonly textName: Locator;
    readonly textGenre: Locator;
    readonly textSpecie: Locator;
    readonly textStatus: Locator;
    readonly homeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.textName = page.locator(".character-name");
        this.textGenre = page.locator(".character-genre");
        this.textSpecie = page.locator(".character-specie");
        this.textStatus = page.locator(".character-status");
        this.homeButton = page.locator("text=Home");
    }

    async isDisplayed() {
        await expect(this.textName).toBeVisible();
        await expect(this.textGenre).toBeVisible();
        await expect(this.textSpecie).toBeVisible();
        await expect(this.textStatus).toBeVisible();
        await expect(this.homeButton).toBeVisible();
    }

    async validateCharacterData(characterData: any) {
        await expect(this.textName).toHaveText(characterData.name);
        await expect(this.textGenre).toContainText(characterData.genre);
        await expect(this.textSpecie).toContainText(characterData.specie);
        await expect(this.textStatus).toContainText(characterData.status);
    }
}