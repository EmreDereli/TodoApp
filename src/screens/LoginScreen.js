import React, {useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import Layout from '../components/common/Layout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Fonts from '../styles/Fonts';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {getAllUsers} from '../api/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/actions/user/UserActions';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  /**
   * @function
   * Login user and set user data
   * @param {string} email- User email address
   * @param {string} password- User password
   * */
  const onSubmit = async ({email, password}) => {
    const response = await getAllUsers();
    const checkUser = response.data.find(
      user => user.email === email && user.password && password,
    );
    if (checkUser) {
      await AsyncStorage.setItem('user_id', checkUser.id);
      dispatch(setUser(checkUser));
      navigation.replace('TodosScreen');
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Glad to see you again!</Text>
      </View>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => onSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <View>
            <Input
              placeholder={'E-mail'}
              onChangeText={handleChange('email')}
            />
            <Input
              secureTextEntry
              placeholder={'Password'}
              onChangeText={handleChange('password')}
            />
            <Button title={'Login'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  titleWrapper: {
    margin: 20,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 30,
  },
  subTitle: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
  },
});
