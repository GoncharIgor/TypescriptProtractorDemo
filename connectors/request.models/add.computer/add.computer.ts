import _ from 'lodash';
import {$, browser} from 'protractor';

const requestOptions = JSON.parse(JSON.stringify(require('../common.request.options')));

module.exports = _.merge(requestOptions, {
  method: 'POST',
  uri: `${browser.params.baseUrl}/computers`
});
