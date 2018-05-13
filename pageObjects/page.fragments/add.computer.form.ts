import {BaseFragment} from "protractor-element-extend";
import {element, by, $, ElementFinder} from 'protractor';

export class AddComputerForm extends BaseFragment {
  computerNameInputField: ElementFinder;
  computerNameInputFieldLabel: ElementFinder;
  introducedDateInputField: ElementFinder;
  introducedDateInputFieldLabel: ElementFinder;
  discontinuedDateInputField: ElementFinder;
  discontinuedDateInputFieldLabel: ElementFinder;
  companySelectBox: ElementFinder;
  companySelectBoxLabel: ElementFinder;

  constructor(rootElement: ElementFinder) {
    super(rootElement);
    this.computerNameInputField = element(by.id("name"));
    this.computerNameInputFieldLabel = $("label[for='name']");
    this.introducedDateInputField = element(by.id("introduced"));
    this.introducedDateInputFieldLabel = $("label[for='introduced']");
    this.discontinuedDateInputField = element(by.id("discontinued"));
    this.discontinuedDateInputFieldLabel = $("label[for='discontinued']");
    this.companySelectBox = element(by.id("company"));
    this.companySelectBoxLabel = $("label[for='company']");
  }

  async fillInAllFields(name: string, introducedDate:string, discontinuedDate:string, company:string) {
    await this.computerNameInputField.sendKeys(name);
    await this.introducedDateInputField.sendKeys(introducedDate);
    await this.discontinuedDateInputField.sendKeys(discontinuedDate);
    await element(by.cssContainingText("option", company)).click();
  }
}
