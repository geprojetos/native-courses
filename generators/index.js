const screenGenerator = require('./screens');
const componentGenerator = require('./components');
const sharedGenerator = require('./shared');

module.exports = (plop) => {
  plop.setGenerator('screens', screenGenerator);
  plop.setGenerator('screens-components', componentGenerator);
  plop.setGenerator('shared-components', sharedGenerator);
};
