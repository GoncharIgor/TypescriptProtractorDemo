import {browser} from 'protractor';
import {AddNewComputerPage} from '../page.objects/pages/add.new.computer.page';

describe('VALIDATION: Add new computer validation functionality works correctly', () => {
  const addNewComputerPage = new AddNewComputerPage();
  const introducedDate = '2017-01-14';
  const discontinuedDate = '2017-01-15';
  const company = 'Sony';

  beforeEach(async () => {
    await browser.get('http://computer-database.herokuapp.com/computers/new');
  });

  it('Computer should not be added if Computer name field is empty', async () => {
    await addNewComputerPage.addComputer('', introducedDate, discontinuedDate, company);

    await expect(addNewComputerPage.getPageHeaderText()).toEqual('Add a computer');
    await expect((addNewComputerPage.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
  });
});
