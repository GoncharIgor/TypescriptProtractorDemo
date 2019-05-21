import {browser} from 'protractor';
import {cloneDeep, merge} from 'lodash';

const commonRequestOptions = cloneDeep(require('../common.request.options'));

export const addComputerRequest = merge(commonRequestOptions, {
  method: 'POST',
  uri: `${browser.params.baseUrl}/computers`
});
