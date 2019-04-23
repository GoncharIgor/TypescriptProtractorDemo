import {$, browser, protractor} from "protractor";

export abstract class BasePage {
  protected pageTitle: string;

  constructor(title: string) {
    this.pageTitle = title;
  }

  public async refreshPage(): Promise<void> {
    await browser.refresh();
  }

  public async hitEnter() {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  public async clickTab() {
    await $("body").sendKeys(protractor.Key.TAB);
  }
}
