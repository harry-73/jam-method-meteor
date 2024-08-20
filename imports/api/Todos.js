import { Mongo } from 'meteor/mongo';

const Todos = new Mongo.Collection('todos');

const schema = {
  _id: String,
  text: String,
  done: Boolean,
  createdAt: Date,
  authorId: String
};

Todos.attachSchema(schema);

export default Todos;
