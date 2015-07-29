var yargs = require('yargs');

var argv = yargs.argv,
    bump = (argv.bump).toLowerCase();

module.exports = {
  bump: bump
};