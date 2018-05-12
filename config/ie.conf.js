const _ = require('lodash');
const computersBaseConfig = require('./computers.base.conf');

const config = {
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
};

exports.config = _.merge(computersBaseConfig.config, config);
