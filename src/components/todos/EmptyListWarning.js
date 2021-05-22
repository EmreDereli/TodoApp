import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fonts from '../../styles/Fonts';

export default function EmptyListWarning() {
  return (
    <Text
      style={{
        alignSelf: 'center',
        margin: 20,
        fontFamily: Fonts.Regular,
      }}>
      Henüz bir task eklemediniz. Eklemek için{' '}
      <Text style={{fontFamily: Fonts.SemiBold}}>Add a New Task</Text> butonuna
      tıklayın.
    </Text>
  );
}

const styles = StyleSheet.create({});
