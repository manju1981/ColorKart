var React = require('react-native');
var Overlay = require('react-native-overlay');
var BlurView = require('react-native-blur').BlurView;

var {
  View,
  ActivityIndicatorIOS,
  StyleSheet,
} = React;

var LoadingOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    }
  },

  onLoadPress : function() {
      PhotoLibrary.readPhoto(
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


  render(): ReactElement {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <BlurView style={styles.background} blurType="dark">
        <TouchableHighlight style={styles.touchableHighlight} underlayColor="#99AA99" onPress={this.onLoadPress}>
        <View style={[styles.buttonBox, styles.saveButtonBox]}>
            <Text style={styles.buttonText}>
                Save
            </Text>
        </View>
        </TouchableHighlight>
        </BlurView>
      </Overlay>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
})

module.exports = LoadingOverlay;
