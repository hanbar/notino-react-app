import { createContext } from 'react';
import { Task } from './TodoType';

type ContextTask = [Task | undefined, (task: Task) => void];

const TaskContext = createContext<ContextTask>([undefined, () => {}]);

export default TaskContext;
