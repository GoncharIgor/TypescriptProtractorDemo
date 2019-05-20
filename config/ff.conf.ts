import * as _ from 'lodash';

import {computersBaseConfig} from './base.conf';

export const config = _.merge(computersBaseConfig, {
  capabilities: {
    browserName: 'firefox',
    acceptSslCerts: true,
    trustAllSSLCertificates: true,
    acceptInsecureCerts: true,
    ACCEPT_SSL_CERTS: true,
    firefoxOptions: {
      args: ['--disable-infobars'],
      prefs: {
        'geo.enabled': false
      }
    }
  },
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.gecko.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.20.0.exe']
  }
});
