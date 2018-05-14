import {$, ElementFinder, element, by, browser} from "protractor";
import {BaseComputerPage} from "./base.computer.page";
import {ComputerSearchForm} from "./page.fragments/computer.search.form";
import {ComputerTable} from "./page.fragments/computer.table";
import {Pagination} from "./page.fragments/pagination";

export class ComputersListPage extends BaseComputerPage {
  computerSearchForm:ElementFinder;
  computerTable:ElementFinder;
  addNewComputerButton:ElementFinder;
  messageWarning:ElementFinder;
  paginationBlock:ElementFinder;

  constructor(private title: string = 'computers found') {
    super(title);
    this.computerSearchForm = new ComputerSearchForm($("#actions form"));
    this.computerTable = new ComputerTable($("table.computers"));
    this.addNewComputerButton = element(by.id("add"));
    this.messageWarning = $(".alert-message.warning");
    this.paginationBlock = new Pagination(element(by.id("pagination")));
  }

  async navigateToEditComputerPage() {
    await this.computerTable.computerNamesInTheTable.get(0).click();
  }

  async getComputersCount() {
    let count = await this.pageHeader.getText();
    return count.replace(/[^\/\d]/g, "");
  }
}
