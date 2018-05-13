import {$, ElementFinder, browser} from 'protractor';
import {BasePage} from './base.page';

export class BaseComputerPage extends BasePage {
  appNameHeader: ElementFinder;

  constructor(title: string) {
    super(title);
    this.appNameHeader = $(".fill>a");
  }

  async clickAppHeader(): Promise<void> {
    await this.appNameHeader.click();
  }

  async openComputersListPage(): Promise<void>{
    browser.logger.info('[Navigate] to Computers list page');
    await browser.driver.navigate().to(`${browser.params.baseUrl}/computers`);
  }
}
