import { Task } from "../types/interfaces";

export interface TaskAction {
  payload: { id?: string; name?: string };
  type: "REMOVE_TASK" | "ADD_TASK" | "TOGGLE_TASK" | "EDIT_TASK";
}

export const reducer: React.Reducer<Task[], TaskAction> = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask: Task = {
        name: action.payload.name!,
        done: false,
      };
      return [...state, newTask];
    case "TOGGLE_TASK":
      state[parseInt(action.payload.id!)].done = !state[
        parseInt(action.payload.id!)
      ].done;
      return [...state];
    case "EDIT_TASK":
      state[parseInt(action.payload.id!)].name = action.payload.name!;
      console.log(action.payload);
      console.log(state);
      return [...state];
    case "REMOVE_TASK":
      state.splice(parseInt(action.payload.id!), 1);
      return [...state];
    default:
      return state;
  }
};
