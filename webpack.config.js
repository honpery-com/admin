/**
 * webpack config entry.
 */
const helpers = require('./helpers');

module.exports = require(helpers.root(`config/webpack.${process.env.NODE_ENV}.config`));