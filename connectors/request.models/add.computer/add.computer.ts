import * as _ from 'lodash';
import {browser} from 'protractor';

const commonRequestOptions = _.cloneDeep(require('../common.request.options'));

module.exports = _.merge(commonRequestOptions, {
  method: 'POST',
  uri: `${browser.params.baseUrl}/computers`
});
