import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import axios from 'axios';
import Todo from '../models/Todo';
import TodoItem from '../components/todos/TodoItem';
import Loader from '../components/common/Loader';
import TodoList from '../components/todos/TodoList';
import Layout from '../components/common/Layout';
import AddTodoButton from '../components/todos/AddTodoButton';
import {useDispatch, useSelector} from 'react-redux';
import {setTodos, setLoader} from '../redux/actions/todo/TodoAction';
import {getTodos} from '../api/todos';
import AddTodoModal from '../components/todos/AddTodoModal';
import Fonts from '../styles/Fonts';
import EmptyListWarning from '../components/todos/EmptyListWarning';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TodosScreen({navigation}) {
  const dispatch = useDispatch();
  const {todos, loading} = useSelector(state => state.todoReducer);
  const [showAddModal, setShowAddModal] = useState(false);
  const getAllTodos = async () => {
    dispatch(setLoader(true));
    const res = await getTodos();
    const userId = await AsyncStorage.getItem('user_id');
    dispatch(setTodos(res.data.filter(todo => todo.userId === userId)));
    dispatch(setLoader(false));
  };

  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <Layout style={styles.layout}>
      {!loading && todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        !loading && todos.length === 0 && <EmptyListWarning />
      )}
      {!loading && <AddTodoButton onPress={() => setShowAddModal(true)} />}
      <AddTodoModal
        isVisible={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
