import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('user_id');
          navigation.replace('MainScreen');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
