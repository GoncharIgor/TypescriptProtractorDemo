const rp = require("request-promise");
import {browser} from "protractor";

const addComputerRequest = require("./request.models/add.computer/add.computer");

export class ComputerConnector {

  public async addComputer(requestBody) {
    addComputerRequest.body = requestBody;
    let id = null;
    try {
      browser.logger.info("[Save] Adding computer with name:", addComputerRequest.body.name);
      const response = await rp(addComputerRequest);
      id = response.body.id;
    } catch (error) {
      browser.logger.error(error);
    }
    return id;
  }
}
