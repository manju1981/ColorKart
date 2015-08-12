'use strict';

var React = require('react-native');
//var Router = require('react-native-router');
var Router = require('react-native-custom-navigation');

var HomePage = require('./homepage');

var {
    AppRegistry,
} = React;

var Index = React.createClass({
  render() {
    return (
      <Router
        initialRoute={{
          component: HomePage
        }}/>);
  }
});

AppRegistry.registerComponent('HelloWorld', () => Index);
