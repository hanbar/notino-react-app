import React, { FunctionComponent, useContext, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task } from './TodoType';
import TaskContext from './TaskContext';

type Props = {
  todo: Task;
};

const Todo: FunctionComponent<Props> = function Todo({ todo }) {
  const [, setSelectedTodo] = useContext(TaskContext);
  const navigate = useNavigate();

  const handleOnClick = (e: any) => {
    e.preventDefault();
    setSelectedTodo(todo);
    navigate(`/detail/${todo.id}`);
  };

  return (
    <div className="todo-item pointer" onClick={handleOnClick}>
      {todo.title}
    </div>
  );
};

export default memo(Todo);
