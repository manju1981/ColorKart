/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var { Icon, TabBarIOS} = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} = React;

var ReactPage = React.createClass({
  render() {
    return (
      <ScrollView>
        <Image source={{uri: "http://sc5.io/blog/wp-content/uploads/2014/06/react.png"}}
               style={{flex: 1, height: 320}} resizeMode="cover" />
        <Text>
          JUST THE UI Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack,
           it easy to try it out on a small feature in an existing project. VIRTUAL DOM React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. DATA FLOW React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
        </Text>
        <Image source={{uri: "http://sc5.io/blog/wp-content/uploads/2014/06/react.png"}}
               style={{flex: 1, height: 320}} resizeMode="cover" />
      </ScrollView>
    )
  }
})

var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var FlowPage = React.createClass({
  render() {
    return (
      <ScrollView>
        <Image source={{uri: "http://www.adweek.com/socialtimes/files/2014/11/FlowLogo650.jpg"}}
               style={{flex: 1, height: 320}} resizeMode="contain" />

        <Image source={{uri: "http://www.adweek.com/socialtimes/files/2014/11/FlowLogo650.jpg"}}
               style={{flex: 1, height: 320}} resizeMode="contain" />

        <Image source={{uri: "http://www.adweek.com/socialtimes/files/2014/11/FlowLogo650.jpg"}}
               style={{flex: 1, height: 320}} resizeMode="contain" />
      </ScrollView>
    )
  }
})

var SecondSwiftComponent  = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },
  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#c1d82f'}
        barTintColor={'#000000'}
        styles={styles.tabBar}>
        <TabBarItemIOS
          name="home"
          iconName={'ion|ios-home-outline'}
          title={''}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="articles"
            iconName={'ion|ios-paper-outline'}
            title={''}
            iconSize={32}
            accessibilityLabel="Articles Tab"
            selected={this.state.selectedTab === 'articles'}
            onPress={() => {
            this.setState({
              selectedTab: 'articles',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="messages"
            iconName={'ion|chatboxes'}
            title={''}
            iconSize={32}
            accessibilityLabel="Messages Tab"
            selected={this.state.selectedTab === 'messages'}
            onPress={() => {
            this.setState({
              selectedTab: 'messages',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="settings"
            iconName={'ion|ios-gear'}
            title={''}
            iconSize={32}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'settings'}
            onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },

  _renderContent: function () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => alert('Beer!')}>
            <Icon
              name='ion|beer'
              size={40}
              color='#887700'
              style={styles.beer}
              />
          </TouchableHighlight>
          <Icon
            name='material|face'
            size={40}
            color='black'
            style={styles.github}
            />
          <Icon
            name='fontawesome|facebook-square'
            size={40}
            color={BrandColors.Facebook}
            style={styles.facebook}
            />
          <Icon
            name='foundation|lightbulb'
            size={40}
            style={styles.lightbulb}/>
        </View>

        <Text style={styles.header}>
          {'Material Icons'}
        </Text>

        <Text style={styles.header}>
          {'Stacked Icons!'}
        </Text>
        <Icon
          name='fontawesome|square'
          size={70}
          color={BrandColors.Twitter}
          style={styles.twitterOutline}>
          <Icon
            name='fontawesome|twitter'
            size={40}
            color='#ffffff'
            style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
        </Icon>

        <Text style={styles.header}>
          {'Create social sign in buttons'}
        </Text>
        <View
          style={styles.signInWithTwitterButton}>
          <Icon
            name='fontawesome|twitter'
            size={28}
            color='#ffffff'
            style={styles.signInWithTwitterIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Twitter'}
          </Text>
        </View>

        <View
          style={styles.signInWithFacebookButton}>
          <Icon
            name='fontawesome|facebook'
            size={28}
            color='#ffffff'
            style={styles.signInWithFacebookIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Facebook'}
          </Text>
        </View>

      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#555555',
  },
  beer: {
    width: 70,
    height: 70,
    margin: 10
  },
  github: {
    width: 70,
    height: 70,
    margin: 10
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  lightbulb: {
    width: 70,
    height: 70,
    margin: 10
  },
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
  signInWithTwitterButton: {
    backgroundColor: BrandColors.Twitter,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3
  },
  signInWithTwitterIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  },
  signInText: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15
  },
  signInWithFacebookButton: {
    backgroundColor: BrandColors.Facebook,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3,
    marginTop: 10
  },
  signInWithFacebookIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  },
});

module.exports = SecondSwiftComponent
