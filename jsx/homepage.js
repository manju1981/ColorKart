'use strict';

var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var PromoImage = require('./components/PromoImage');
var FilledButton = require('./components/FilledButton');
var Dimensions = require('Dimensions');
var Router = require('react-native-custom-navigation');

// TODO: Dimensions may dissapear in next versions,
// or we we will be able to subscribe to dimensions change

var {width, height} = Dimensions.get('window');
var SecondPage = require('./secondpage');

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

var pages = [<PromoImage
                    key="promo1"
                    image={require('image!screen_1')}
                    header="Match"
                    description="of everything that happens to your life"
                    promoText="We will help you to find the great match"
                  />,
                  <PromoImage
                    key="promo2"
                    image={require('image!screen_2')}
                    header="Try"
                    description="our products at your home"
                    promoText="We will deliver the products at your doorstep without any extra cost"
                  />,
                  <PromoImage
                    key="promo3"
                    image={require('image!screen_3')}
                    header="Buy"
                    description="with confidence using plenty of our payment options"
                    promoText="We guarantee to deliver the best available in the world"
                  />];

var HomePage = React.createClass({

  getInitialState : function() {
        return {
            avatarSource :'http://iphonewallpapers-hd.com/thumbs/firework_iphone_wallpaper_5-t2.jpg',
        }
   },

  goToTweet: function() {
    this.props.route.push({
      component: SecondPage
    });
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

  render() {
   return ( <View style={styles.main}>
                  <Carousel>{pages}</Carousel>

                  <View style={styles.buttonContainer}>
                    <FilledButton
                              style={styles.button}
                              highlightedColor='#007655'
                              title='Upload Photo'
                              titleStyle={{color:'white'}}
                              onPress={this.goToTweet}
                            />
                  </View>
           </View>)
  }
});


var styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width,
    bottom: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
},
 button: {
   backgroundColor: 'rgba(14, 163, 120, 0.75)',
   paddingVertical: 10,
   paddingHorizontal: 25
 }
});

module.exports = HomePage;
