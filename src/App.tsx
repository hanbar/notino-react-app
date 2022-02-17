import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TodosList from './TodosList';
import TodoDetail from './TodoDetail';
import { Task } from './TodoType';
import TaskContext from './TaskContext';

const ApiRequest = require('./ApiRequest');

const getTodos = () => {
  return ApiRequest.get('https://mocki.io/v1/235d99b6-e565-4323-871a-fe650254ce05')
    .then((payload: Task[]) => {
      return payload;
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((error: any) => {
      // handle error
    });
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const contextTask = useState<Task>();

  useEffect(() => {
    (async () => {
      const awaitedTodos = await getTodos();
      setTasks(awaitedTodos);
    })();
  }, []);

  return (
    <TaskContext.Provider value={contextTask}>
      <Routes>
        <Route path="/" element={<TodosList todos={tasks} />} />
        <Route path="/detail/:detailId" element={<TodoDetail todos={tasks} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </TaskContext.Provider>
  );
}

export default App;
