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
                        <Image
                            resizeMode="cover"
                            source={require('image!bw')}
                            style={styles.image}  />
                            <View style={styles.gradientContainer}>
                            </View>
                            <View style={styles.introTextContainer}>
                              <Text style={styles.introText}>
                                  Match-Try-Buy
                                </Text>
                            </View>
                            <View style={styles.introSubTextContainer}>
                              <Text style={styles.introSubText}>
                                  Just upload your photo to match a sandle that you wanna buy!!
                                </Text>
                            </View>
                            <TouchableHighlight underlayColor="#AA9999" onPress={this.onLoadPress}>
                              <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>
                                  Upload Photo
                                </Text>
                              </View>
                            </TouchableHighlight>
           </View>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor : '#F5FCFF',
        position        : 'relative',
    },

    button : {
        position: 'absolute',
        backgroundColor: '#ff0000',
        bottom  : 30,
    },

    image: {
      position  : 'absolute',
      top       : 20,
      left      : 0,
      right     : 0,
      bottom    : 0,
    },

    buttonContainer : {
        fontSize : 16,
        color: '#ffffff',
        backgroundColor: 'rgba(105,205,35,0.9)',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
        marginBottom: 30,
    },

    buttonText: {
      color: '#ffffff',
      fontSize: 18
    },

    introText: {
      color: '#ffffff',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0, 0)',
      fontSize: 30,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },

    introTextContainer: {
      backgroundColor: 'rgba(0,0,0, 0)',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 1,
      marginBottom: 10,

    },

    introSubTextContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 40,
    },

    introSubText : {
      textAlign: 'center',
      fontSize: 14,
      color: '#dddddd',
    },

    gradientContainer: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      position  : 'absolute',
      top       : 20,
      left      : 0,
      right     : 0,
      bottom    : 0,
    }
});

AppRegistry.registerComponent('HelloWorld', () => CustomSwiftComponent);
