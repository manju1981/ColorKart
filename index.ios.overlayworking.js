
'use strict';

var React = require('react-native');
var LoadingOverlay = require('./LoadingOverlay');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} = React

var LoadingOverlayExampleApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={{uri:'http://iphonewallpapers-hd.com/thumbs/firework_iphone_wallpaper_5-t2.jpg'}} style={styles.image} />

        <LoadingOverlay isVisible={true}>
        </LoadingOverlay>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
});

AppRegistry.registerComponent('HelloWorld', () => LoadingOverlayExampleApp);
