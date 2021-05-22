import React, {useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import Layout from '../components/common/Layout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Fonts from '../styles/Fonts';
import {Formik} from 'formik';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Glad to see you again!</Text>
      </View>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
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
