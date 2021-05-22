import {addTodo} from '../redux/actions/todo/TodoAction';

class Todo {
  constructor(title, description, createdAt, userId) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.userId = userId;
  }
}
export default Todo;
