import React, { FunctionComponent, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';
import TaskContext from './TaskContext';
import { Task } from './TodoType';

type Props = {
  todos: Task[];
};

const TodoDetail: FunctionComponent<Props> = function TodoDetail({ todos }) {
  const [selectedTodo, setSelectedTodo] = useContext(TaskContext);
  const { detailId } = useParams();

  useEffect(() => {
    if (!selectedTodo) {
      const matchedTodo = find(todos, ['id', detailId]);
      if (matchedTodo) {
        setSelectedTodo(matchedTodo);
      }
    }
  }, [todos]);

  return (
    <div className="todo-box">
      {selectedTodo && <h2>{selectedTodo.title}</h2>}
    </div>
  );
};

export default TodoDetail;
