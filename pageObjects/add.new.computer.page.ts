import {BasePage} from "./base.page";
import {AddComputerForm} from "./page.fragments/add.computer.form";
import {BaseComputerPage} from "./base.computer.page";
import {element, by, ElementFinder, $, browser} from 'protractor';

export class AddNewComputerPage extends BaseComputerPage {
  addComputerForm: ElementFinder;
  createThisComputerButton: ElementFinder;
  cancelButton: ElementFinder;
  emptyComputerNameErrorNotification: ElementFinder;

  constructor(private title: string = "Add a computer") {
    super(title);
    this.addComputerForm = new AddComputerForm($("form fieldset"));
    this.createThisComputerButton = $(".btn.primary");
    this.cancelButton = element(by.linkText("Cancel"));
    this.emptyComputerNameErrorNotification = $("fieldset div:nth-child(1)");
  }

  async addComputer(name: string, introducedDate: string, discontinuedDate: string, company: string) {
    await this.addComputerForm.fillInAllFields(name, introducedDate, discontinuedDate, company);
    await this.createThisComputerButton.click();
    browser.logger.info(`Computer ${name} was added to DB`);
    return name;
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }
}
