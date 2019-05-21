import {cloneDeep, merge} from 'lodash';
import {browser} from 'protractor';

const commonRequestOptions = cloneDeep(require('../common.request.options'));

export const addComputerRequest = merge(commonRequestOptions, {
  method: 'POST',
  uri: `${browser.params.baseUrl}/computers`
});
