import {BaseFragment} from "protractor-element-extend";
import {element, by, ElementFinder} from 'protractor';

export class ComputerSearchSection extends BaseFragment {
  filterInputField: ElementFinder;
  filterSubmitButton: ElementFinder;

  constructor(rootElement: ElementFinder) {
    super(rootElement);
    this.filterInputField = element(by.id("searchbox"));
    this.filterSubmitButton = element(by.id("searchsubmit"));
  }

  async findComputerInTheTable(computerName: string) {
    await this.filterInputField.sendKeys(computerName);
    await this.filterSubmitButton.click();
  }
}