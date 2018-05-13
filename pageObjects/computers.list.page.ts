import {$, ElementFinder, browser} from 'protractor';
import {BaseComputerPage} from "./base.computer.page";

export class ComputersListPage extends BaseComputerPage {

  constructor(private title: string = 'computers found') {
    super(title);
    this.appNameHeader = $(".fill>a");
  }
}
