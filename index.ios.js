/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const CARDS_URL = 'http://theanxy.github.io/killsmog/data/cards.json';

class FirstProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: null
    };
  }

  fetchData() {
    fetch(CARDS_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            cards: responseData,
            loaded: true
          });
        })
        .done();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    debugger;

    const card = this.state.cards.weather[0];
    return this.renderCard(card);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading cards...
        </Text>
      </View>
    )
  }

  renderCard(card) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {card.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
