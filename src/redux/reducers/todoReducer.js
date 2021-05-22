import {
  ADD_TODO,
  SET_TODOS,
  DELETE_TODO,
  SET_LOADER,
} from '../actions/todo/TodoActionTypes';

const initialState = {
  todos: [],
  loading: false,
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case SET_TODOS:
      return {
        ...state,
        loading: true,
        todos: action.payload,
      };
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default todoReducer;
