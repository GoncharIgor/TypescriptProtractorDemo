import {$, browser, protractor} from 'protractor';

export class BasePage {
  pageTitle: string;

  constructor(title: string) {
    this.pageTitle = title;
  }

  async refreshPage(): Promise<void> {
    await browser.refresh();
  }

  async hitEnter() {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  async clickTab() {
    await $("body").sendKeys(protractor.Key.TAB);
  }
}
