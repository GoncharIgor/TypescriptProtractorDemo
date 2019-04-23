import {$, by, element, ElementFinder} from "protractor";

export class AddComputerForm {
  computerNameInputField: ElementFinder;
  computerNameInputFieldLabel: ElementFinder;
  introducedDateInputField: ElementFinder;
  introducedDateInputFieldLabel: ElementFinder;
  discontinuedDateInputField: ElementFinder;
  discontinuedDateInputFieldLabel: ElementFinder;
  companySelectBox: ElementFinder;
  companySelectBoxLabel: ElementFinder;

  constructor(rootElement: ElementFinder) {
    this.computerNameInputField = rootElement.element(by.id("name"));
    this.computerNameInputFieldLabel = rootElement.$("label[for='name']");
    this.introducedDateInputField = rootElement.element(by.id("introduced"));
    this.introducedDateInputFieldLabel = rootElement.$("label[for='introduced']");
    this.discontinuedDateInputField = rootElement.element(by.id("discontinued"));
    this.discontinuedDateInputFieldLabel = rootElement.$("label[for='discontinued']");
    this.companySelectBox = rootElement.element(by.id("company"));
    this.companySelectBoxLabel = rootElement.$("label[for='company']");
  }

  public async fillInAllFields(name: string, introducedDate: string, discontinuedDate: string, company: string) {
    await this.computerNameInputField.sendKeys(name);
    await this.introducedDateInputField.sendKeys(introducedDate);
    await this.discontinuedDateInputField.sendKeys(discontinuedDate);
    await element(by.cssContainingText("option", company)).click();
  }
}
