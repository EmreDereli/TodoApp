import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
import Layout from '../components/common/Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const login = async () => {
    const userId = await AsyncStorage.getItem('user_id');
    if (userId) {
      setTimeout(() => {
        navigation.replace('TodosScreen');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.replace('MainScreen');
      }, 2000);
    }
  };
  useEffect(() => {
    // login();
    Animated.timing(animation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => login());
  }, []);
  return (
    <Layout style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Text style={{opacity: animation}}>Splash Screen</Animated.Text>
    </Layout>
  );
}

const styles = StyleSheet.create({});
