import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modal';
import Input from '../common/Input';
import ErrorText from '../common/ErrorText';
import {Formik} from 'formik';
import addTodoValidation from '../../validations/AddTodoValidation';
import AddTodoButton from './AddTodoButton';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';
import {addNewTodo} from '../../api/todos';
import Todo from '../../models/Todo';
import {useDispatch} from 'react-redux';
import {addTodo, doneSetTodos} from '../../redux/actions/todo/TodoAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddTodoModal({isVisible, onClose}) {
  const dispatch = useDispatch();
  const onSubmit = async ({title, description}) => {
    const userId = await AsyncStorage.getItem('user_id');
    const todo = new Todo(title, description, new Date(), userId);
    const response = await addNewTodo(todo);
    dispatch(addTodo(response.data));
    onClose();
  };
  return (
    <Modal
      onBackdropPress={() => onClose()}
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={1000}
      onSwipeComplete={() => onClose()}
      swipeDirection={['down']}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          <View style={styles.line} />
          <Formik
            validationSchema={addTodoValidation}
            initialValues={{title: '', description: ''}}
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
              <View style={styles.form}>
                <Text style={styles.title}>Add a New Task</Text>
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
                <AddTodoButton
                  style={{marginBottom: 30}}
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    alignSelf: 'center',
    width: '10%',
    height: 3,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    marginVertical: 10,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    marginHorizontal: 15,
  },
});
