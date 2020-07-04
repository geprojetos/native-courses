// const sharedGenerator = require('./shared');
const componentGenerator = require('./components');
// const pageGenerator = require('./pages');

module.exports = (plop) => {
  // plop.setGenerator('shared-component', sharedGenerator);
  plop.setGenerator('page-component', componentGenerator);
  // plop.setGenerator('page', pageGenerator);
};
