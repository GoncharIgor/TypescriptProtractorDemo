import {browser} from 'protractor';
const rp = require('request-promise');

const rpWithProxy = rp.defaults({
  proxy: browser.params.proxy
});

import {addComputerRequest} from './request.models/add.computer/add.computer';

export class ComputerConnector {

  public async addComputer(requestBody) {
    addComputerRequest.form = requestBody;
    let id = null;
    try {
      browser.logger.info('[Save] Adding computer with name:', addComputerRequest.form.name);
      const response = await rpWithProxy(addComputerRequest);
      id = response.body.id;
    } catch (error) {
      browser.logger.error(error);
    }
    return id;
  }
}
