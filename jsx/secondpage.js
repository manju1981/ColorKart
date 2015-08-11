'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View
} = React;

var SecondSwiftComponent = React.createClass({
    getInitialState : function() {
        return {
        }
     },
    render: function() {

        return (
            <View style={styles.container}>
                <Text style={styles.instructionsText}>
                    Second page
                </Text>
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
    }
});

module.exports = SecondSwiftComponent
