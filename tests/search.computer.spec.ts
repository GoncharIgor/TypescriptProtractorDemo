import {$} from 'protractor';
import {ComputerSearchForm} from '../page.objects/page.components/computer.search.form';
import {ComputersListPage} from '../page.objects/pages/computers.list.page';

const computersListPage = new ComputersListPage();
const computerSearchSection = new ComputerSearchForm($('#actions form'));

describe('SEARCH: computer in the table', () => {

  beforeEach(async (): Promise<any> => {
    await computersListPage.openComputersListPage();
  });

  it('Search for the first computer in the table', async (): Promise<any> => {
    await  computerSearchSection.findComputerInTheTable('ACE');
  });
});
