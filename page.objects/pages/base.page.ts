import {$, browser, protractor} from 'protractor';

const EC = protractor.ExpectedConditions;

export abstract class BasePage {
  protected pageTitle: string;

  constructor(title: string) {
    this.pageTitle = title;
  }

  public async refreshPage(): Promise<void> {
    await browser.refresh();
  }

  public async waitUntilElementVisible(elem): Promise<void> {
    await browser.wait(EC.presenceOf(elem), 5000);
    try {
      return await browser.wait(EC.visibilityOf(elem), 5000);
    } catch (e) {
      browser.logger.error(`[Not visible] element ${elem} is not visible`);
    }
  }

  public async waitUntilElementIsClickable(elem) {
    try {
      return await browser.wait(EC.elementToBeClickable(elem), 5000);
    } catch (e) {
      browser.logger.error(`[Not clickable] element ${elem} is not clickable`);
    }
  }

  public async getCssValueOfElement(element, value): Promise<string> {
    return await element.getCssValue(value);
  }

  public async hitEnter(): Promise<void> {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  public async clickTab(): Promise<void> {
    await $('body').sendKeys(protractor.Key.TAB);
  }

  public async scrollPageToTheElement(element): Promise<void> {
    await browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
  }
}
