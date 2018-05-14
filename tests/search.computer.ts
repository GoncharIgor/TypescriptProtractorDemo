import {$, browser} from "protractor";
import {ComputerSearchForm} from "../pageObjects/page.fragments/computer.search.form";
import {ComputersListPage} from "../pageObjects/computers.list.page";

const computersListPage = new ComputersListPage();
const computerSearchSection = new ComputerSearchForm($("#actions form"));

describe("SEARCH: computer in the table", () => {

  beforeEach(async (): Promise<any> => {
    await computersListPage.openComputersListPage();
  });

  it("Search for the first computer in the table", async (): Promise<any> => {
    await  computerSearchSection.findComputerInTheTable("ACE");
    await browser.sleep(3000);
  });
});
