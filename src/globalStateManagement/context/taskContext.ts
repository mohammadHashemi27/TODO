import type { Dispatch } from "react";
import type { ActionTask, Task } from "../reducer/Task";
import React from "react";

export interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<ActionTask>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
