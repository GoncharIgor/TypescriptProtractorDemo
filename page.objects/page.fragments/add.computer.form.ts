import {$, by, element, ElementFinder} from "protractor";

export class AddComputerForm {
  private companySelectBox: ElementFinder;
  private companySelectBoxLabel: ElementFinder;
  private computerNameInputField: ElementFinder;
  private computerNameInputFieldLabel: ElementFinder;
  private discontinuedDateInputField: ElementFinder;
  private discontinuedDateInputFieldLabel: ElementFinder;
  private introducedDateInputField: ElementFinder;
  private introducedDateInputFieldLabel: ElementFinder;

  constructor(rootElement: ElementFinder) {
    this.companySelectBox = rootElement.element(by.id("company"));
    this.companySelectBoxLabel = rootElement.$("label[for='company']");
    this.computerNameInputField = rootElement.element(by.id("name"));
    this.computerNameInputFieldLabel = rootElement.$("label[for='name']");
    this.discontinuedDateInputField = rootElement.element(by.id("discontinued"));
    this.discontinuedDateInputFieldLabel = rootElement.$("label[for='discontinued']");
    this.introducedDateInputField = rootElement.element(by.id("introduced"));
    this.introducedDateInputFieldLabel = rootElement.$("label[for='introduced']");
  }

  public async fillInAllFields(name: string, introducedDate: string, discontinuedDate: string, company: string) {
    await this.computerNameInputField.sendKeys(name);
    await this.introducedDateInputField.sendKeys(introducedDate);
    await this.discontinuedDateInputField.sendKeys(discontinuedDate);
    await element(by.cssContainingText("option", company)).click();
  }
}
