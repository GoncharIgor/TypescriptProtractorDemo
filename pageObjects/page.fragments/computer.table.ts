import {ComputerSearchSection} from "./computer.search.form"
import {BaseFragment} from "protractor-element-extend";
import {element, by, $, ElementFinder, ElementArrayFinder} from 'protractor';
const ArrayHelpers = require("../../helpers/array.helpers");

const computerSearch = new ComputerSearchSection($("#actions form"));

export class ComputerTable extends BaseFragment {
  tableHeaderColumns: ElementArrayFinder;
  computerNamesInTheTable: ElementArrayFinder;
  computerIntroducedDateInTheTable: ElementFinder;
  computerDiscontinuedDateInTheTable: ElementFinder;
  computerCompanyNameInTheTable: ElementFinder;

  constructor(rootElement) {
    super(rootElement);
    this.tableHeaderColumns = element.all(by.tagName("th"));
    this.computerNamesInTheTable = element.all(by.css(".computers.zebra-striped>tbody>tr>td>a"));
    this.computerIntroducedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(2)");
    this.computerDiscontinuedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(3)");
    this.computerCompanyNameInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(4)");
  }

  async getTableColumnsAmount() {
    return await this.tableHeaderColumns.count();
  }

  async isComputerInfoInTheTableEqualsExpected(initialComputerData) {
    const actualComputerInfo = [];

    await computerSearch.findComputerInTheTable(initialComputerData[0]);
    actualComputerInfo.push(await this.computerNamesInTheTable.get(0).getText());
    actualComputerInfo.push(await this.computerIntroducedDateInTheTable.getText());
    actualComputerInfo.push(await this.computerDiscontinuedDateInTheTable.getText());
    actualComputerInfo.push(await this.computerCompanyNameInTheTable.getText());
    return ArrayHelpers.arraysEqual(initialComputerData, actualComputerInfo);
  }
}
