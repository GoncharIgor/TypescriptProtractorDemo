import {$, ElementFinder, browser} from 'protractor';
import {BaseComputerPage} from "./baseComputerPage";

export class ComputersListPage extends BaseComputerPage {

  constructor(private title: string = 'computers found') {
    super(title);
    this.appNameHeader = $(".fill>a");
  }
}
