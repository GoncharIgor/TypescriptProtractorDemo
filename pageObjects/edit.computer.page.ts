import {AddNewComputerPage} from "./add.new.computer.page";
import {$, ElementFinder} from "protractor";

export class EditComputerPage extends AddNewComputerPage {
  deleteThisComputerButton: ElementFinder;

  constructor() {
    super();
    this.deleteThisComputerButton = $(".btn.danger");
  }

  async deleteComputer() {
    await this.deleteThisComputerButton.click();
  }
}
