import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from "../../components/genericFunctions";

export class RickSanchezPage extends GenericFunctions {
    readonly page: Page;
    readonly textName: Locator;
    readonly textGenre: Locator;
    readonly textSpecie: Locator;
    readonly textStatus: Locator;
    readonly homeButton: Locator;
    readonly topButton: Locator;
    readonly addButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.textName = page.locator("//h1[normalize-space()='Rick Sanchez']");
        this.textGenre = page.locator("//p[normalize-space()='Gender: Male']");
        this.textSpecie = page.locator("//p[b[normalize-space()='Specie:'] and normalize-space()='Specie: Human']");
        this.textStatus = page.locator("//p[b[normalize-space()='Status:'] and normalize-space()='Status: Alive']");
        this.homeButton = page.locator("//a[normalize-space()='Home']");
        this.topButton = page.locator("//a[normalize-space()='Top']");
        this.addButton = page.locator("//a[normalize-space()='Add']");
    }

    async isDisplayed() {
        await expect(this.textName).toBeVisible();
        await expect(this.textGenre).toBeVisible();
        await expect(this.textSpecie).toBeVisible();
        await expect(this.textStatus).toBeVisible();
        await expect(this.homeButton).toBeVisible();
    }

}