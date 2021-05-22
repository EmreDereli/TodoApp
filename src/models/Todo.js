import {addTodo} from '../redux/actions/todo/TodoAction';

/**
 * @constructor
 * Represents a task.
 * @param {string} title - The title of the task.
 * @param {string} description - The description of the task.
 * @param {Date} createdAt - The create date of the task
 * @param {string} userId - The userId of the task owner
 */
class Todo {
  constructor(title, description, createdAt, userId) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.userId = userId;
  }
}
export default Todo;
