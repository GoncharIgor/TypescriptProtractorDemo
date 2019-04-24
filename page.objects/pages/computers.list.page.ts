import {$, by, element, ElementFinder} from 'protractor';

import {ComputerSearchForm} from '../page.components/computer.search.form';
import {ComputerTable} from '../page.components/computer.table';
import {Pagination} from '../page.components/pagination';
import {BaseComputerPage} from './base.computer.page';

export class ComputersListPage extends BaseComputerPage {
  public computerSearchForm: ComputerSearchForm;
  public computerTable: ComputerTable;
  public addNewComputerButton: ElementFinder;
  public messageWarning: ElementFinder;
  public paginationBlock: Pagination;

  constructor(private title: string = 'computers found') {
    super(title);
    this.computerSearchForm = new ComputerSearchForm($('#actions form'));
    this.computerTable = new ComputerTable($('table.computers'));
    this.addNewComputerButton = element(by.id('add'));
    this.messageWarning = $('.alert-message.warning');
    this.paginationBlock = new Pagination(element(by.id('pagination')));
  }

  public async navigateToEditComputerPage() {
    await this.computerTable.computerNamesInTheTable.get(0).click();
  }

  public async getComputersCount() {
    const count = await this.pageHeader.getText();
    return count.replace(/[^\/\d]/g, '');
  }
}
