import React, {useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import Layout from '../components/common/Layout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Fonts from '../styles/Fonts';
import {Formik} from 'formik';
import {register} from '../api/users';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../redux/actions/user/UserActions';

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onSubmit = async ({name, email, password}) => {
    const response = await register({
      name,
      email,
      password,
    });
    if (response.status === 201) {
      await AsyncStorage.setItem('user_id', response.data.id);
      dispatch(setUser(response.data));
      navigation.replace('TodosScreen');
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subTitle}>
          Enter your information below to manage your tasks!
        </Text>
      </View>

      <Formik
        initialValues={{name: '', email: '', password: ''}}
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
              placeholder={'Name Surname'}
              onChangeText={handleChange('name')}
            />
            <Input
              placeholder={'E-mail'}
              onChangeText={handleChange('email')}
            />
            <Input
              placeholder={'Password'}
              onChangeText={handleChange('password')}
            />
            <Button title={'Sign Up'} onPress={handleSubmit} />
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
