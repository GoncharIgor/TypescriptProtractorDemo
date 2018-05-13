import {ComputersListPage} from '../pageObjects/computersListPage';
import {ComputerSearchSection} from '../pageObjects/page.fragments/computer.search.form';
import {$, ElementFinder, browser} from 'protractor';
const computerSearchSection = new ComputerSearchSection($("#actions form"));


const computersListPage = new ComputersListPage();

describe('SEARCH: computer in the table', () => {

  beforeEach(async (): Promise<any> => {
    await computersListPage.openComputersListPage();
  });

  it('Search for the first computer in the table', async (): Promise<any> => {
    await  computerSearchSection.findComputerInTheTable('ACE');
    await browser.sleep(3000);
  });
});
