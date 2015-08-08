'use strict';

var React = require('react-native');
var LoadingOverlay = require('./LoadingOverlay');

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
    MCFileWriterUtil,
    PhotoLibrary
} = require('NativeModules');

var CustomSwiftComponent = React.createClass({

    // Generate the initial state of the view.
    getInitialState : function() {
        return {
            // textInput seemed like it should have an initial state, so I moved it here. -- KD
            textInputValue : null,
            resultsText : 'Nothing has happened yet :(',
            avatarSource :'http://iphonewallpapers-hd.com/thumbs/firework_iphone_wallpaper_5-t2.jpg',
            overlayVisible: false
        }
    },

    // Executed when the TouchableHighlight "Save" button is pressed
    onSavePress : function() {
        var fileName     = this.state.textInputValue,      // What file name to write?
            fileContents = Math.random().toString(); // This goes into the file

        MCFileWriterUtil.writeFile(
            fileName,
            fileContents,
            // errorCallback
            (results) => {
                alert('Error: ' + results.errMsg);
            },
            // successCallback
            (results) => {
                var resultsText = 'Saved to ' + fileName + '. Press load to see contents.';

                // Update the state of the view
                this.setState({
                    resultsText : resultsText
                });
            }
        );
    },

    // Executed when the TouchableHighlight "Load" button is pressed
    onLoadPress : function() {
        // File name from text input
        var fileName = this.state.textInputValue;

        /*MCFileWriterUtil.readFile(
            fileName,
            //errorCallback
            (results) => {
                alert('Error: ' + results.errMsg);
            },
            // successCallback
            (results) => {
                var resultsText = 'Contents of ' + fileName + ': ' + results.contents;

                // Update the state of the view
                this.setState({
                    resultsText : resultsText
                });
            }
        );*/

        PhotoLibrary.readPhoto(
          //  fileName,
            // successCallback
            (results) => {
                this.setState({avatarSource:results.imageUrl});
            },
            //errorCallback
            (results) => {
                alert('callback2' );
            }
        );
        this.setState({openOverlay:false});
    },

    openOverlay : function() {
        this.setState({overlayVisible:true});
    },

    // Handler for the TextInput onChange event -- changed a bit to setState
    onTextInputChange : function(event) {
        this.setState({
            textInputValue : event.nativeEvent.text
        });
    },


    render: function() {
        // I didn't really see a point in definiing a var to hold this.state so I removed it -- KD

        return (
            <View style={styles.container}>
                <View style={styles.outputContainer}>
                    <TouchableHighlight underlayColor="#AA9999" onPress={this.openOverlay}>
                      <Image style={styles.image} source={{uri: this.state.avatarSource}} ></Image>
                    </TouchableHighlight>
                    <LoadingOverlay isVisible={this.state.overlayVisible}>
                      
                    </LoadingOverlay>
                </View>

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

    instructionsText : {
        fontSize : 20
    },

    separator : {
        borderWidth  : .5,
        borderColor  : '#AEAEAE',
        height       : 1,
        width        : 300,
        marginBottom : 25
    },

    labelContainer : {
        flexDirection  : 'row',
        width          : 300
    },

    labelText : {
        paddingRight : 10,
        fontSize     : 18
    },

    textInput : {
        height      : 26,
        borderWidth : 0.5,
        borderColor : '#0f0f0f',
        padding     : 4,
        flex        : 1,
        fontSize    : 13,
    },

    buttonContainer : {
        flexDirection  : 'row',
        justifyContent : 'center',
        alignItems     : 'center',
        marginTop      : 20
    },

    touchableHighlight : {
        marginLeft  : 10,
        marginRight : 10,
    },

    buttonBox : {
        flexDirection  : 'row',
        justifyContent : 'center',
        alignItems     : 'center',
        padding        : 10,
        borderWidth    : 2,
        borderRadius   : 5
    },

    saveButtonBox : {
        borderColor : '#AA0000'
    },

    loadButtonBox : {
        borderColor : '#00AA00'
    },

    buttonText : {
        fontSize : 16
    },
    image: {
      width          : 280,
      height         : 180
    },
    outputContainer : {
        width          : 300,
        height         : 200,
          alignItems: 'stretch'
    }
});

AppRegistry.registerComponent('HelloWorld', () => CustomSwiftComponent);
