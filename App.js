/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Router from './src/pages/router';
import {Provider} from 'mobx-react/native'
import store from './src/store/app.js'
import {
  View,
  Text
} from 'react-native'


type Props = {};


class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App



