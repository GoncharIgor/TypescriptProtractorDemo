import {AddNewComputerPage} from "../page.objects/pages/add.new.computer.page";
import {browser} from "protractor";
import {ComputersListPage} from "../page.objects/pages/computers.list.page";
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

describe("CANCELLATION: cancel computer functionality works correctly", () => {
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
