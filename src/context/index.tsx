import React, { createContext, Reducer, useReducer } from "react";
import { Task } from "../types/interfaces";

export interface TaskAction {
  payload: string;
  type: "REMOVE_TASK" | "ADD_TASK" | "TOGGLE_TASK";
}

interface IContextProps {
  state: Task[];
  dispatch: React.Dispatch<TaskAction>;
}
const initialState: Task[] = [];
const store = createContext({} as IContextProps);
const { Provider } = store;

const reducer: React.Reducer<Task[], TaskAction> = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask: Task = {
        name: action.payload,
        done: false,
      };
      return [...state, newTask];
    case "TOGGLE_TASK":
      state[parseInt(action.payload)].done = !state[parseInt(action.payload)]
        .done;
      console.log(state[parseInt(action.payload)].done);
      return [...state];
    case "REMOVE_TASK":
      state.splice(parseInt(action.payload), 1);
      return [...state];
    default:
      return state;
  }
};

const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<Task[], TaskAction>>(
    reducer,
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
