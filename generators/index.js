// const sharedGenerator = require('./shared');
const screenGenerator = require('./screens');
const componentGenerator = require('./components');

module.exports = (plop) => {
  // plop.setGenerator('shared-component', sharedGenerator);
  plop.setGenerator('screens', screenGenerator);
  plop.setGenerator('screens-components', componentGenerator);
};
