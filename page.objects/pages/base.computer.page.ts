import {$, browser, ElementFinder} from "protractor";

import {BasePage} from "./base.page";

export abstract class BaseComputerPage extends BasePage {
  protected appNameHeader: ElementFinder;
  protected pageHeader: ElementFinder;

  constructor(title: string) {
    super(title);
    this.appNameHeader = $(".fill>a");
    this.pageHeader = $("#main>h1");
  }

  public async clickAppHeader(): Promise<void> {
    await this.appNameHeader.click();
  }

  public async openComputersListPage(): Promise<void> {
    browser.logger.info("[Navigate] to Computers list page");
    await browser.driver.navigate().to(`${browser.params.baseUrl}/computers`);
  }

  public async getPageHeaderText() {
    return await this.pageHeader.getText();
  }

  public async getAppHeaderText() {
    return await this.appNameHeader.getText();
  }
}
