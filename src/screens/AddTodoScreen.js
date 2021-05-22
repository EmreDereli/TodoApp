import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/common/Layout';
import Input from '../components/common/Input';
import AddTodoButton from '../components/todos/AddTodoButton';
import {Formik} from 'formik';
import addTodoValidation from '../validations/AddTodoValidation';
import ErrorText from '../components/common/ErrorText';

export default function AddTodoScreen() {
  return (
    <Layout style={styles.layout}>
      <Formik
        validationSchema={addTodoValidation}
        initialValues={{title: '', description: ''}}
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
          <View style={styles.form}>
            <Input
              placeholder="Title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {touched.title && errors.title && (
              <ErrorText error={errors.title} />
            )}
            <Input
              placeholder="Description"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            {touched.description && errors.description && (
              <ErrorText error={errors.description} />
            )}
            <AddTodoButton disabled={!isValid} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
  },
  form: {
    justifyContent: 'space-between',
  },
});
