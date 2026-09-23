

export class BasePage {
    constructor(page) {
        this.page = page;
    }


    async handleDropdown(locator, value) {
        await locator.selectOption(value);
        console.log(`**** dropdown handled with value ${value} ****`);
    }
//how to add 
    async click(locator) {
        await locator.click();
        console.log(`**** click performed ****`);

    }

    async check(locator) {
        await locator.check();
        console.log(`*** checkbox is selected`);

    }

    async type(locator, text) {
        await locator.fill(text);
        console.log(`**** type performed with value ${text} ****`);
    }

    async getText(locator) {
        await locator.innerText();
        console.log(`**** Text is : ${locator.innerText()}`);

    }

    async navigateToApplication(url) {
        await this.page.goto(url);
        console.log(`**** navigated to URL: ${url} ****`);
    }

    async uploadFiles(locator, path) {
        await locator.setInputFiles(path);
        console.log(`**** files uploaded: ${filePaths} ****`);
    }
}