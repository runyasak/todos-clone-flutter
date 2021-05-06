import type { Todo } from '../models/Todo';

let todos: Todo[] = [
  {
    topic: 'อ่านหนังสือหลังตื่นนอน',
    msg: 'อ่านเล่ม ทำยังไงให้สาธิดีขึ้น',
    complete: false,
  },
  {
    topic: 'อ่านหนังสือก่อนนอน',
    msg: 'อ่านเล่ม นอนอย่างมีประสิทธิภาพ',
    complete: false,
  },
]

export const getTodos = () => todos;

export const addTodo = (value: Todo) => {
  todos.push(value);
};

export const completeTodo = (inputIndex: number) => {
  todos[inputIndex].complete = !todos[inputIndex].complete;
};

export const deleteTodo = (inputIndex: number) => {
  todos = todos.filter((data, index) => index !== inputIndex);
};

