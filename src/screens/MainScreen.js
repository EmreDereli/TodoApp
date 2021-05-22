import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/common/Layout';
import Tab from '../components/login/Tab';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainScreen() {
  return (
    <Layout>
      <Tab
        tabs={[
          {label: 'Login', view: <LoginScreen />},
          {label: 'Sign Up', view: <RegisterScreen />},
        ]}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
