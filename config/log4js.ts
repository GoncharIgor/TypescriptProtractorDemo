import log4js from 'log4js';

module.exports = () => {
  log4js.configure({
    appenders: {
      fileLog: {type: 'file', filename: 'target/logs/logInfo.log'},
      console: {type: 'log4js-protractor-appender'}
    },
    categories: {
      file: {appenders: ['fileLog'], level: 'error'},
      another: {appenders: ['console'], level: 'trace'},
      default: {appenders: ['console', 'fileLog'], level: 'trace'}
    }
  });
};
