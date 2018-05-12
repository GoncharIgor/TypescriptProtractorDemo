import {$, browser} from 'protractor';

export class BasePage {
  pageTitle: string;

  constructor(title: string) {
    this.pageTitle = title;
  }

  async refreshPage(): Promise<void> {
    await browser.refresh();
  }
}
