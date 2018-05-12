const _ = require('lodash');
const baseConfig = require('../protractor.jasmine.conf');

const computersBaseConfig = {
  specs: ['../typescript/tests/*.js'],
  suites: {},
  params: {
    baseUrl: 'http://computer-database.herokuapp.com',
  }
};

exports.config = _.merge(baseConfig.config, computersBaseConfig);
