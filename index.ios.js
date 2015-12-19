/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var WelcomeScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.page}>
        <Text>
          shit
        </Text>
      </View>
    );
  }
});

var mailboxbox = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.nav}
        initialRoute={{
          component: WelcomeScreen,
          title: 'Mailboxbox'
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  page: {
    flex: 1,
    paddingTop: 64,
    margin: 10
  },
});

AppRegistry.registerComponent('mailboxbox', () => mailboxbox);
