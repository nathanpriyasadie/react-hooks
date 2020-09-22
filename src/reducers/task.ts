import { Task } from "../types/interfaces";

export interface TaskAction {
  payload: string;
  type: "REMOVE_TASK" | "ADD_TASK" | "TOGGLE_TASK" | "EDIT_TASK";
}

export const reducer: React.Reducer<Task[], TaskAction> = (state, action) => {
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
      return [...state];
    case "EDIT_TASK":
      state.splice(parseInt(action.payload), 1);
      return [...state];
    case "REMOVE_TASK":
      state.splice(parseInt(action.payload), 1);
      return [...state];
    default:
      return state;
  }
};
