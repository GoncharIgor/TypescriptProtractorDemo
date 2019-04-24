import {$, by, element, ElementFinder} from 'protractor';

const ArrayHelpers = require('../../helpers/array.helpers');

export class Pagination {
  public paginationNextButton: ElementFinder;
  public paginationPreviousButton: ElementFinder;
  public paginationNextButtonParentWrapper: ElementFinder;
  public paginationPreviousButtonParentWrapper: ElementFinder;
  private readonly paginationNextButtonParentWrapperSelector: string;
  private readonly paginationNextButtonSelector: string;
  private readonly paginationPreviousButtonSelector: string;
  private currentPaginationInfo: ElementFinder;

  constructor(rootElement) {
    this.paginationNextButtonParentWrapperSelector = '/parent::li';
    this.paginationNextButtonSelector = '//a[contains(text(), \'Next\')]';
    this.paginationPreviousButtonSelector = '//a[contains(text(),\'Previous\')]';

    this.currentPaginationInfo = rootElement.$('.current a');
    this.paginationNextButton = rootElement.element(by.xpath(this.paginationNextButtonSelector));
    this.paginationPreviousButton = rootElement.element(by.xpath(this.paginationPreviousButtonSelector));
    this.paginationNextButtonParentWrapper = rootElement
      .element(by.xpath(`${this.paginationNextButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
    this.paginationPreviousButtonParentWrapper = rootElement
      .element(by.xpath(`${this.paginationPreviousButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
  }

  public async getPaginationBlockText() {
    return await this.currentPaginationInfo.getText();
  }

  public async getTotalAmountOfComputersInPagination() {
    const amount = await this.currentPaginationInfo.getText();
    return ArrayHelpers.splitStringIntoArrayByAndGetIndex(amount, ' ', 'last');
  }

  public async clickNextButton() {
    await this.paginationNextButton.click();
  }

  public async clickPreviousButton() {
    await this.paginationPreviousButton.click();
  }
}
