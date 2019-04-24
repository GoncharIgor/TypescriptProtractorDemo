import {browser} from 'protractor';
import {ComputersListPage} from '../page.objects/pages/computers.list.page';

describe('PAGINATION: Computer-database index page layout verification', () => {
  const computersListPage = new ComputersListPage();
  beforeEach(() => browser.get('http://computer-database.herokuapp.com/computers'));

  it('Pagination NEXT button should be visible', async () => {
    await  expect(computersListPage.paginationBlock.paginationNextButton.isDisplayed()).toBe(true);
  });

  it('Pagination NEXT button should be enabled', async () => {
    await expect(computersListPage.paginationBlock.paginationNextButton.isEnabled()).toBe(true);
  });

  it('Pagination PREVIOUS button should be disabled', async () => {
    const previousButtonClassAttributeValue = await computersListPage.paginationBlock.paginationPreviousButtonParentWrapper.getAttribute('class');
    await expect(previousButtonClassAttributeValue).toContain('disabled');
  });

  it('Pagination NEXT button should be enabled', async () => {
    const nextButtonClassAttributeValue = await computersListPage.paginationBlock.paginationNextButtonParentWrapper.getAttribute('class');
    await  expect(nextButtonClassAttributeValue).not.toContain('disabled');
  });

  it('Pagination PREVIOUS button should be visible', async () => {
    await expect(computersListPage.paginationBlock.paginationPreviousButton.isDisplayed()).toBe(true);
  });

  it('Pagination should show the correct total amount of computers', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await expect(computersListPage.paginationBlock.getPaginationBlockText()).toEqual(`Displaying 1 to 10 of ${initialTotal}`);
  });

  it('Pagination should show the correct text after clicking next button', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.paginationBlock.clickNextButton();
    await expect(computersListPage.paginationBlock.getPaginationBlockText()).toEqual(`Displaying 11 to 20 of ${initialTotal}`);
  });

  it('Pagination should show the correct text after clicking next and prev button', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.paginationBlock.clickNextButton();
    await computersListPage.paginationBlock.clickPreviousButton();
    expect(computersListPage.paginationBlock.getPaginationBlockText()).toEqual(`Displaying 1 to 10 of ${initialTotal}`);
  });

  it('Pagination should save the current state after page refresh', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    await computersListPage.paginationBlock.clickNextButton();
    await computersListPage.refreshPage();
    await expect(computersListPage.paginationBlock.getPaginationBlockText()).toEqual(`Displaying 11 to 20 of ${initialTotal}`);
  });

  it('Next button has to be disabled at the end of the test', async () => {
    const initialTotal = await computersListPage.getComputersCount();
    const numberOfPages = Math.floor(+initialTotal - 1 / 10);

    for (let i = 0; i < numberOfPages; i++) {
      await computersListPage.paginationBlock.clickNextButton();
      await browser.sleep(10);
    }
    const nextButtonClassAttributeValue = await computersListPage.paginationBlock.paginationNextButtonParentWrapper.getAttribute('class');
    await expect(nextButtonClassAttributeValue).toContain('disabled');

    const previousButtonClassAttributeValue = await computersListPage.paginationBlock.paginationPreviousButtonParentWrapper.getAttribute('class');
    await expect(previousButtonClassAttributeValue).not.toContain('disabled');
  });
});
