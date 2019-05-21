import _ from 'lodash';

import {computersBaseConfig} from './base.conf';

export const config = _.merge(computersBaseConfig, {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--test-type=browser', 'disable-extensions', '--disable-infobars'],
      prefs: {
        'plugins.always_open_pdf_externally': true,
        'download': {
          prompt_for_download: false,
          directory_upgrade: true
        }
      }
    }
  },
  chromeDriver: ('../../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.44'
    + (process.platform.indexOf('win') === 0 ? '.exe' : ''))
});
