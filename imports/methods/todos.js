import Todos from '../api/Todos';
import { createMethod } from 'meteor/jam:method';

export const createTodo = createMethod({
  name: 'todos.create',
  schema: Todos.schema,
  async run({ text }) {
    const todo = {
      text,
      done: false,
      createdAt: new Date(),
      authorId: Meteor.userId() // can also use this.userId instead of Meteor.userId()
    };
    console.log('Create: Before insert');
    const todoId = await Todos.insertAsync(todo);
    console.log('Create:', todoId);
    return todoId;
  }
});