'use strict';

var React = require('react-native');
var Router = require('react-native-router');

var HomePage = require('./homepage');

var {
    AppRegistry,
} = React;

var firstRoute = {
  name: 'Home',
  component: HomePage
};

var Index = React.createClass({
  render() {
    return (
      <Router
        firstRoute={firstRoute}
      />
    )
  }
});

AppRegistry.registerComponent('HelloWorld', () => Index);
