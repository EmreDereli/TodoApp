import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        zIndex: 999,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 20,
          opacity: 0.5,
          position: 'absolute',
          zIndex: 1000,
        }}>
        <ActivityIndicator color="black"></ActivityIndicator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
