import {ComputersListPage} from "../pageObjects/computers.list.page";
import {AddNewComputerPage} from "../pageObjects/add.new.computer.page";
import {$, browser} from "protractor";

const EditComputerPage = require("../pageObjects/edit.computer.page");
const StringHelper = require("../helpers/string.helper");
const testComputerInitial = require("./../testData/computer.json");

describe("ADD: new computer", () => {
  const computersListPage = new ComputersListPage();
  const addNewComputerPage = new AddNewComputerPage();

  beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers/new"));

  it("Add new computer page should be opened after click [Add New Computer]", async (): Promise<any> => {
    await browser.get("http://computer-database.herokuapp.com/computers");
    await computersListPage.addNewComputerButton.click();
    await expect(addNewComputerPage.getPageHeaderText()).toEqual("Add a computer");
  });

  it("Computer should be added after filling all the inputs", () => {
    const testComputer = StringHelper.clone(testComputerInitial);

    const name = StringHelper.generateRandomString(10);
    const introducedDate = testComputer.introducedDate;
    const discontinuedDate = testComputer.discontinuedDate;
    const company = testComputer.company;
    const expectedComputerData = [name, "14 Jan 2017", "15 Jan 2017", company];
    addNewComputerPage.addComputer(name, introducedDate, discontinuedDate, company);

    expect(computersListPage.messageWarning.isDisplayed()).toBe(true);
    expect(computersListPage.computerTable.isComputerInfoInTheTableEqualsExpected(expectedComputerData)).toBe(true);
  });
});

describe("Add/delete computer functionality", () => {
  const computersListPage = new ComputersListPage();
  const addNewComputerPage = new AddNewComputerPage();
  const editComputerPageObject = new EditComputerPage();

  const name = StringHelper.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers");
  });

  it("Computers total amount should be increased by 1 after adding new computer", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    computersListPage.addNewComputerButton.click();
    addNewComputerPage.addComputer(name, introducedDate, discontinuedDate, company);
    const resultTotal = await computersListPage.getComputersCount();

    expect(+initialTotal + 1).toBe(+resultTotal);
  });

  it("Computers total amount should be decreased by 1 after deleting the computer", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    computersListPage.computerSearchForm.findComputerInTheTable(name);
    computersListPage.navigateToEditComputerPage();
    editComputerPageObject.deleteComputer();
    const resultTotal = await computersListPage.getComputersCount();

    expect(initialTotal - 1).toEqual(+resultTotal);
  });

  it("Computers total amount should not change id computer adding is canceled", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    computersListPage.addNewComputerButton.click();
    addNewComputerPage.clickCancelButton();
    const resultTotal = await computersListPage.getComputersCount();

    expect(initialTotal).toEqual(resultTotal);
  });
});

describe("Add new computer functionality works correctly", () => {
  const computersListPage = new ComputersListPage();
  const addNewComputerPage = new AddNewComputerPage();

  const name = StringHelper.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if all fields are entered but Cancel button is clicked", () => {
    addNewComputerPage.addComputerForm.fillInAllFields(name, introducedDate, discontinuedDate, company);
    addNewComputerPage.clickCancelButton();

    expect(computersListPage.getAppHeaderText()).toEqual("Play sample application — Computer database");
    // expect(computersListPage.messageWarning.isDisplayed()).toBe(false);
    expect(browser.isElementPresent(computersListPage.messageWarning)).toBe(false);
  });
});


describe("Add new computer validation functionality works correctly", () => {
  const addNewComputerPage = new AddNewComputerPage();

  const name = StringHelper.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if Computer name field is empty", () => {
    addNewComputerPage.addComputer("", introducedDate, discontinuedDate, company);

    expect(addNewComputerPage.getPageHeaderText()).toEqual("Add a computer");
    expect((addNewComputerPage.emptyComputerNameErrorNotification).getAttribute("class")).toMatch("clearfix error");
  });
});

describe("Add new computer Object style functionality works correctly", () => {
  const testComputerInitial = require("./../testData/computer.json");
  const Computer = require("./../domains/Computer");

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should be added after filling all the inputs", () => {
    const testComputer = StringHelper.clone(testComputerInitial);
    const computersListPage = new ComputersListPage();

    const name = StringHelper.generateRandomString(10);
    testComputer.name = name;
    const computer = new Computer(
      testComputer.name, testComputer.introducedDate,
      testComputer.discontinuedDate, testComputer.company,
    );
    const initialComputerData = [name, "14 Jan 2017", "15 Jan 2017", testComputer.company];

    computer.addThisComputer();

    expect(computersListPage.messageWarning.isDisplayed()).toBe(true);
    computersListPage.computerTable.isComputerInfoInTheTableEqualsExpected(initialComputerData);
  });
});
