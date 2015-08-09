'use strict';

var React = require('react-native');
var Line = require('./Line');
var Dimensions = require('Dimensions');
// TODO: Dimensions may dissapear in next versions,
// or we we will be able to subscribe to dimensions change
var {width, height} = Dimensions.get('window');
var {
  StyleSheet,
  Text,
  Image,
  View
} = React;


/**
 * Intended to be item in the Carousel
 * Displays promo text on top of the image
*/
var PromoImage = React.createClass({
  render: function() {
    return (
      <Image
        resizeMode="cover"
        contentContainerStyle={styles.image}
        style={styles.image}
        source={this.props.image}
      >
        <View style={styles.promoContainer}>
          <Text style={[styles.text, styles.promoHeader]}>{this.props.header}</Text>
          <Text style={[styles.text, styles.promoDescription]}>{this.props.description}</Text>
          <Line style={{backgroundColor:'#0ea378'}} />
          <Text style={[styles.text, styles.promoText]}>{this.props.promoText}</Text>
        </View>
      </Image>
    );
  }
});

var styles = StyleSheet.create({
  image: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  promoContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 120,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    textAlign: 'center',
  },
  promoHeader: {
    fontSize: 42,
    fontWeight: '700',
  },
  promoDescription: {
    fontSize: 22,
    fontWeight: '300',
    width: width - 60,
    alignSelf: 'center',
  },
  promoText: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 22,
    width: width - 60,
  },
});

module.exports = PromoImage;
