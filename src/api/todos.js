import {get, post, deleteById, put} from './common/RequestHelper';
import {ApiUrl} from './common/Config';

export const getTodos = () => {
  const url = `${ApiUrl}/todos`;
  return get(url);
};

export const addNewTodo = request => {
  const url = `${ApiUrl}/todos`;
  return post(url, request);
};

export const updateTodoById = request => {
  const url = `${ApiUrl}/todos/${request.id}`;
  return put(url, request);
};

export const deleteTodoById = id => {
  const url = `${ApiUrl}/todos/${id}`;
  return deleteById(url);
};
