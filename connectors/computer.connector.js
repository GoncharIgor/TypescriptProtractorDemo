const rp = require('request-promise');

const addComputerRequest = require('./request.models/delete.message/delete.message');

export class ComputerConnector {

  async addComputer(requestBody) {
    addComputerRequest.body = requestBody;
    let id = null;
    try {
      browser.logger.info('[Save] Adding computer with name:', addComputerRequest.body.name);
      let response = await rp(addComputerRequest);
      id = response.body.id;
    } catch (error) {
      browser.logger.error(error);
    }
    return id;
  }
}
