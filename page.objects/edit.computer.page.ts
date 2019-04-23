import {$, ElementFinder} from "protractor";

import {AddNewComputerPage} from "./add.new.computer.page";

export class EditComputerPage extends AddNewComputerPage {
  deleteThisComputerButton: ElementFinder;

  constructor() {
    super();
    this.deleteThisComputerButton = $(".btn.danger");
  }

  public async deleteComputer() {
    await this.deleteThisComputerButton.click();
  }
}
