'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;
var WelcomeScreen = require('./WelcomeScreen.js');

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
});

AppRegistry.registerComponent('mailboxbox', () => mailboxbox);
