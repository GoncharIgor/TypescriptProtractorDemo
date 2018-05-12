const _ = require('lodash');
const smsgBaseConfig = require('./computers.base.conf');

const config = {
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
  chromeDriver: ('../../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.38' + (process.platform.indexOf('win') === 0 ? '.exe' : ''))
};

exports.config = _.merge(smsgBaseConfig.config, config);
