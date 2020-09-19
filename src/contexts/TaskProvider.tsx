import React, { createContext, Reducer, useReducer } from "react";
import { TaskAction, reducer } from "../reducers/task";
import { Task } from "../types/interfaces";

interface IContextProps {
  state: Task[];
  dispatch: React.Dispatch<TaskAction>;
}
const initialState: Task[] = [];
const TaskContext = createContext({} as IContextProps);
const { Provider } = TaskContext;

const TaskProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<Task[], TaskAction>>(
    reducer,
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { TaskContext, TaskProvider };
