import React, { FunctionComponent } from 'react';

import Todo from './Todo';
import { Task } from './TodoType';

type Props = {
  todos: Task[];
};

const TodosList: FunctionComponent<Props> = function TodosList({ todos }) {
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodosList;
