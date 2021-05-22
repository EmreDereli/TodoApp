import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Wrapper from './src/components/common/Wrapper';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </Provider>
  );
}

const styles = StyleSheet.create({});
