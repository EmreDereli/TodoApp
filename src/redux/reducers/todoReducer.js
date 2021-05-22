import {
  ADD_TODO,
  SET_TODOS,
  DELETE_TODO,
  SET_LOADER,
  UPDATE_TODO,
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
    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
}

export default todoReducer;
