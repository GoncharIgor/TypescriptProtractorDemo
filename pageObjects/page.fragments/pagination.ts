import {BaseFragment} from "protractor-element-extend";
import {element, by, $, ElementFinder} from 'protractor';

const ArrayHelpers = require("../../helpers/array.helpers");

export class Pagination extends BaseFragment {
  paginationNextButtonParentWrapperSelector: string;
  paginationNextButtonSelector: string;
  paginationPreviousButtonSelector: string;
  currentPaginationInfo: ElementFinder;
  paginationNextButton: ElementFinder;
  paginationPreviousButton: ElementFinder;
  paginationNextButtonParentWrapper: ElementFinder;
  paginationPreviousButtonParentWrapper: ElementFinder;


  constructor(rootElement) {
    super(rootElement);
    this.paginationNextButtonParentWrapperSelector = "/parent::li";
    this.paginationNextButtonSelector = "//a[contains(text(), 'Next')]";
    this.paginationPreviousButtonSelector = "//a[contains(text(),'Previous')]";
    this.currentPaginationInfo = $(".current a");
    this.paginationNextButton = element(by.xpath(this.paginationNextButtonSelector));
    this.paginationPreviousButton = element(by.xpath(this.paginationPreviousButtonSelector));
    this.paginationNextButtonParentWrapper = element(by.xpath(`${this.paginationNextButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
    this.paginationPreviousButtonParentWrapper = element(by.xpath(`${this.paginationPreviousButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
  }

  async getPaginationBlockText() {
    return await this.currentPaginationInfo.getText();
  }

  async getTotalAmountOfComputersInPagination() {
    let amount = await this.currentPaginationInfo.getText();
    return ArrayHelpers.splitStringIntoArrayByAndGetIndex(amount, " ", "last");
  }

  async clickNextButton() {
    await this.paginationNextButton.click();
  }

  async clickPreviousButton() {
    await this.paginationPreviousButton.click();
  }
}