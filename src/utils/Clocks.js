import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  update = () => {
    this.setState({ time: new Date() });
  };
  componentDidMount() {
    setInterval(this.update, 1000);
  }
  render() {
    return (
      <View style={stylesheet.viewstyling}>
          <Text style={stylesheet.textstyle}>
            {this.state.time.toLocaleTimeString('en-US')}
          </Text>
      </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  viewstyling: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 95,
  },

  cardstyling: {
    padding: 50,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },

  textstyle: {
    textAlign: 'center',
    justifyContent: 'center',

    fontSize: 35,
    fontWeight: 'bold',
  },
});