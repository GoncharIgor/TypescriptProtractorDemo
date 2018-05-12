const _ = require('lodash');
const baseConfig = require('./base.conf');

const config = {
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
};

exports.config = _.merge(baseConfig.config, config);

