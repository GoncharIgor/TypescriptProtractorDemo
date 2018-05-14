import {EditComputerPage} from "../page.objects/edit.computer.page";
import {ComputersListPage} from "../page.objects/computers.list.page";
import {browser} from "protractor";
import {AddNewComputerPage} from "../page.objects/add.new.computer.page";
import {StringHelper} from "../helpers/string.helper";

describe("AMOUNT: Total computers amount check", () => {
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
