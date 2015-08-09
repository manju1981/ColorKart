'use strict';

var React = require('react-native');
var Line = require('./Line');

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
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: Image.resizeMode.cover,
    flexDirection: 'column',
    backgroundColor: '#ff0000',
  },
  promoContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
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
    width: 220,
    alignSelf: 'center',
  },
  promoText: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 22,
    width: 220,
  },
});

module.exports = PromoImage;
