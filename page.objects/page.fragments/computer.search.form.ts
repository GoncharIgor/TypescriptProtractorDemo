import {BaseFragment} from "protractor-element-extend";
import {by, element, ElementFinder} from "protractor";

export class ComputerSearchForm extends BaseFragment {
  filterInputField: ElementFinder;
  filterSubmitButton: ElementFinder;

  constructor(rootElement: ElementFinder) {
    super(rootElement);
    this.filterInputField = element(by.id("searchbox"));
    this.filterSubmitButton = element(by.id("searchsubmit"));
  }

  public async findComputerInTheTable(computerName: string) {
    await this.filterInputField.sendKeys(computerName);
    await this.filterSubmitButton.click();
  }
}
