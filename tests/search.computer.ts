import {ComputersListPage} from '../pageObjects/computersListPage';

const computersListPage = new ComputersListPage();

describe('SEARCH: computer in the table', () => {

  beforeEach(async (): Promise<any> => {
    await computersListPage.openComputersListPage();
  });

  it('Search for the first computer in the table', async (): Promise<any> => {
    return true;
  });
});
