import {addTodo} from '../redux/actions/todo/TodoAction';

class Todo {
  constructor(title, description, createdAt) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }
}
export default Todo;
