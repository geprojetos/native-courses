const screenGenerator = require('./navigators');
const componentGenerator = require('./components');
const sharedGenerator = require('./shared');

module.exports = (plop) => {
  plop.setGenerator('navigator', screenGenerator);
  plop.setGenerator('navigator-components', componentGenerator);
  plop.setGenerator('shared-components', sharedGenerator);
};
