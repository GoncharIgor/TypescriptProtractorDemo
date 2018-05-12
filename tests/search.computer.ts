import {ComputersListPage} from '../pageObjects/computersListPage';
import {$, ElementFinder, browser} from 'protractor';

const computerlListPage = new ComputersListPage();

describe('SEARCH: computer in the table', () => {

  beforeEach(async (): Promise<any> => {
    await computerlListPage.openComputersListPage();
  });

  it('Search for the first computer in the table', async (): Promise<any> => {
    await browser.sleep(2000);
    return true;
  });
});
