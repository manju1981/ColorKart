'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight
} = React;

var {
    PhotoLibrary
} = require('NativeModules');

var CustomSwiftComponent = React.createClass({
    getInitialState : function() {
        return {
            avatarSource :'http://iphonewallpapers-hd.com/thumbs/firework_iphone_wallpaper_5-t2.jpg',
        }
},

onSavePress : function() {
},

onLoadPress : function() {
        PhotoLibrary.readPhoto(
            (results) => {
                this.setState({avatarSource:results.imageUrl});
            },
            (results) => {
                alert('callback2' );
            }
        );
},



    render: function() {

        return (
            <View style={styles.container}>
                        <TouchableHighlight underlayColor="#AA9999" onPress={this.onLoadPress}>
                          <Image style={styles.image} source={{uri: this.state.avatarSource}} ></Image>
                        </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        backgroundColor : '#F5FCFF',
        paddingTop      : 30
    },

    touchableHighlight : {
        marginLeft  : 10,
        marginRight : 10,
    },

    image: {
      width          : 280,
      height         : 180
    }
});

AppRegistry.registerComponent('HelloWorld', () => CustomSwiftComponent);
