import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function Layout({children, noSafeArea, style}) {
  const Container = noSafeArea ? View : SafeAreaView;
  return (
    <Container style={{flex: 1, backgroundColor: 'white', ...style}}>
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({});
