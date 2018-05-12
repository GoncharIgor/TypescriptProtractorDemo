const path = require('path');
const del = require('del');
const jar = require('selenium-server-standalone-jar');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const downloadPath = path.join(__dirname, '\\downloads', '\\' + Date.now());
const AllureReporter = require('jasmine-allure-reporter');
const allureResultsPath = path.join('./target/allure-xml-report');
const log4jsConfig = require('./config/log4js');
const log4js = require('log4js');

exports.config = {
  framework: 'jasmine2',
  seleniumServerJar: jar.path,
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000,
    print: function () {
    }
  },
  onPrepare: onPrepare,
  onComplete: onComplete,

  params: {
    downloadPath: downloadPath,
    remote: false,
  }
};

function onPrepare() {
  log4jsConfig.call();
  browser.logger = log4js.getLogger('BASE_LOGGER');

  browser.manage().window().setSize(1280, 1024);
  browser.manage().timeouts().implicitlyWait(3000);

  require('./helpers/matchers');

  //add jasmine spec reporter
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displaySuccessful: false,
      displayFailed: true,
      displayErrorMessages: true,
      displayStacktrace: true,
      displayNumber: true,
      displayDuration: true,
    },
    summary: {
      displaySuccessful: true,
      displayFailed: true,
      displayErrorMessages: true,
      displayStacktrace: true,
      displayNumber: true,
      displayDuration: true,
    },
    colors: {
      success: 'green',
      failure: 'red',
      pending: 'yellow'
    },
    prefixes: {
      success: '✓ ',
      failure: '✗ ',
      pending: '* '
    },
    customProcessors: []
  }));

  jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: allureResultsPath
  }));

  //efg custom reporter
  jasmine.getEnv().addReporter({
    suiteStarted: (result) => {
      browser.logger.info(`- - - - SUITE STARTED - - - - ${result.description}`);
    },

    specStarted: (result) => {
      browser.logger.info(`- - TEST SCENARIO STARTED - - ${result.description}`);
    },

    specDone: (result) => {
      browser.logger.info(`- - TEST SCENARIO FINISHED - - ${result.description} with result: ${result.status.toUpperCase()}`);
    }
  });

  //clean allure xmls from previous run
  del([allureResultsPath], {force: true});
}

function onComplete() {
  browser.close();
}
