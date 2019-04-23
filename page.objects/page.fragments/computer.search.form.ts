import {by, ElementFinder} from "protractor";

export class ComputerSearchForm {
  private filterInputField: ElementFinder;
  private filterSubmitButton: ElementFinder;

  constructor(rootElement: ElementFinder) {
    this.filterInputField = rootElement.element(by.id("searchbox"));
    this.filterSubmitButton = rootElement.element(by.id("searchsubmit"));
  }

  public async findComputerInTheTable(computerName: string) {
    await this.filterInputField.sendKeys(computerName);
    await this.filterSubmitButton.click();
  }
}
