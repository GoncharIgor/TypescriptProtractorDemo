import * as _ from 'lodash';

import {computersBaseConfig} from './base.conf';

export const config = _.merge(computersBaseConfig, {
  capabilities: {
    browserName: 'internet explorer',
    platform: 'ANY',
    ignoreProtectedModeSettings: true,
    ignoreZoomSetting: true,
    INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS: true,
    version: '11'
  },
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.12.0.exe']
  }
});
