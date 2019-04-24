import {browser} from 'protractor';
import {StringHelper} from '../helpers/string.helper';
import {AddNewComputerPage} from '../page.objects/pages/add.new.computer.page';
import {ComputersListPage} from '../page.objects/pages/computers.list.page';
import {EditComputerPage} from '../page.objects/pages/edit.computer.page';

describe('AMOUNT: Total computers amount check', () => {
  const computersListPage = new ComputersListPage();
  const addNewComputerPage = new AddNewComputerPage();
  const editComputerPageObject = new EditComputerPage();

  const name = StringHelper.generateRandomString(10);
  const introducedDate = '2017-01-14';
  const discontinuedDate = '2017-01-15';
  const company = 'Sony';

  beforeEach(async (): Promise<any> => {
    await browser.get('http://computer-database.herokuapp.com/computers');
  });

  it('Computers total amount should be increased by 1 after adding new computer', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.addNewComputerButton.click();
    await addNewComputerPage.addComputer(name, introducedDate, discontinuedDate, company);
    const resultTotal = await computersListPage.getComputersCount();

    expect(+initialTotal + 1).toBe(+resultTotal);
  });

  it('Computers total amount should be decreased by 1 after deleting the computer', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.computerSearchForm.findComputerInTheTable(name);
    await computersListPage.navigateToEditComputerPage();
    await editComputerPageObject.deleteComputer();
    const resultTotal = await computersListPage.getComputersCount();

    expect(+initialTotal - 1).toEqual(+resultTotal);
  });

  it('Computers total amount should not change id computer adding is canceled', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.addNewComputerButton.click();
    await addNewComputerPage.clickCancelButton();
    const resultTotal = await computersListPage.getComputersCount();

    expect(initialTotal).toEqual(resultTotal);
  });
});
