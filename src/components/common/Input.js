import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Fonts from '../../styles/Fonts';

export default function Input(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f6f6f6',
    borderRadius: 5,
    margin: 10,
  },
  inputStyle: {
    fontFamily: Fonts.Regular,
  },
});
