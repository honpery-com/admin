/**
 * gen root absolute path.
 */
const path = require('path');

module.exports = filepath => path.join(__dirname, '..', filepath);