import {AddNewComputerPage} from "../page.objects/add.new.computer.page";
import {browser} from "protractor";
import {ComputersListPage} from "../page.objects/computers.list.page";
import {EditComputerPage} from "../page.objects/edit.computer.page";
import {StringHelper} from "../helpers/string.helper";

const testComputerInitial = require("./../../test.data/computer.json");

describe("ADD: new computer", () => {
  const computersListPage = new ComputersListPage();
  const addNewComputerPage = new AddNewComputerPage();

  beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers/new"));

  it("Add new computer page should be opened after click [Add New Computer]", async (): Promise<any> => {
    await browser.get("http://computer-database.herokuapp.com/computers");
    await computersListPage.addNewComputerButton.click();
    await expect(addNewComputerPage.getPageHeaderText()).toEqual("Add a computer");
  });

  it("Computer should be added after filling all the inputs", async (): Promise<any> => {
    const testComputer = Object.assign(testComputerInitial);

    const name = StringHelper.generateRandomString(10);
    const introducedDate = testComputer.introducedDate;
    const discontinuedDate = testComputer.discontinuedDate;
    const company = testComputer.company;
    const expectedComputerData = [name, "14 Jan 2017", "15 Jan 2017", company];
    await addNewComputerPage.addComputer(name, introducedDate, discontinuedDate, company);

    await expect(computersListPage.messageWarning.isDisplayed()).toBe(true);
    await expect(computersListPage.computerTable.isComputerInfoInTheTableEqualsExpected(expectedComputerData)).toBe(true);
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

  beforeEach(async (): Promise<any> => {
    await browser.get("http://computer-database.herokuapp.com/computers");
  });

  it("Computers total amount should be increased by 1 after adding new computer", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.addNewComputerButton.click();
    await addNewComputerPage.addComputer(name, introducedDate, discontinuedDate, company);
    const resultTotal = await computersListPage.getComputersCount();

    expect(+initialTotal + 1).toBe(+resultTotal);
  });

  it("Computers total amount should be decreased by 1 after deleting the computer", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.computerSearchForm.findComputerInTheTable(name);
    await computersListPage.navigateToEditComputerPage();
    await editComputerPageObject.deleteComputer();
    const resultTotal = await computersListPage.getComputersCount();

    expect(+initialTotal - 1).toEqual(+resultTotal);
  });

  it("Computers total amount should not change id computer adding is canceled", async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.addNewComputerButton.click();
    await addNewComputerPage.clickCancelButton();
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

  beforeEach(async () => {
    await browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if all fields are entered but Cancel button is clicked", async () => {
    await addNewComputerPage.addComputerForm.fillInAllFields(name, introducedDate, discontinuedDate, company);
    await addNewComputerPage.clickCancelButton();

    await expect(computersListPage.getAppHeaderText()).toEqual("Play sample application — Computer database");
    await expect(browser.isElementPresent(computersListPage.messageWarning)).toBe(false);
  });
});

describe("Add new computer validation functionality works correctly", () => {
  const addNewComputerPage = new AddNewComputerPage();
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(async () => {
    await browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if Computer name field is empty", async () => {
    await addNewComputerPage.addComputer("", introducedDate, discontinuedDate, company);

    await expect(addNewComputerPage.getPageHeaderText()).toEqual("Add a computer");
    await expect((addNewComputerPage.emptyComputerNameErrorNotification).getAttribute("class")).toMatch("clearfix error");
  });
});
