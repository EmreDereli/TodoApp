import {
  SET_TODOS,
  ADD_TODO,
  SET_LOADER,
  DELETE_TODO,
  UPDATE_TODO,
} from './TodoActionTypes';

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const setLoader = value => ({
  type: SET_LOADER,
  payload: value,
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: todo,
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: todo,
});
