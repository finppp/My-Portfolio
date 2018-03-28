/* config-overrides.js */
const rewireStyledComponents = require('react-app-rewire-styled-components');

const config =

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireStyledComponents(config, env);
  return config;
}
