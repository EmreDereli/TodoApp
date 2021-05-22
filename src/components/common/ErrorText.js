import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export default function ErrorText({error}) {
  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    fontFamily: Fonts.Regular,
    fontSize: 10,
    color: Colors.Warning,
    marginHorizontal: 10,
  },
});
