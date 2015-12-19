'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
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

var styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 64,
    margin: 10
  },
});

module.exports = WelcomeScreen;
