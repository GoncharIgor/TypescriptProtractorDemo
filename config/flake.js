const protractorFlake = require('protractor-flake');
// skip first two passed args (node and self)
let protractorArgs = process.argv.splice(2);

protractorFlake({
    protractorPath: 'node_modules/protractor/bin/protractor',
    maxAttempts: 3,
    parser: 'standard',
    nodeBin: 'node',
    protractorArgs: protractorArgs,
    displayStacktrace: 'all'
}, (status, output) => {
    process.exit(status);
});
