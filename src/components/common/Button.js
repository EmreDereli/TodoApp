import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Fonts from '../../styles/Fonts';

export default function Button({onPress, disabled, style, title}) {
  const backgroundColor = disabled ? 'gray' : '#FF8128';
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.button, backgroundColor, ...style}}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,

    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: Fonts.Regular,
    color: 'white',
    marginHorizontal: 10,
  },
});
