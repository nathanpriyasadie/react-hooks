import React, { useContext, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { TaskCard } from "../components/TaskCard";
import { Toggle } from "../components/Toggle";
import { TaskContext, ThemeContext } from "../context";

export default function HomePage() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { state: tasks, dispatch } = useContext(TaskContext);
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  const [input, setInput] = useState<string>();

  function handleAddTask() {
    dispatch({ payload: input!, type: "ADD_TASK" });
    setInput("");
  }

  function handleEditTask(id: string) {
    dispatch({ payload: id, type: "REMOVE_TASK" });
  }

  function handleDeleteTask(id: string) {
    dispatch({ payload: id, type: "REMOVE_TASK" });
  }

  return (
    <div className={classes.app}>
      <div className={classes.appHeader}>
        <p>Your To Do</p>
      </div>
      <div className={classes.toggleContainer}>
        <Toggle toggleValue={currentTheme} onClick={() => toggleTheme()} />
      </div>
      <div>
        <input
          placeholder="add new to do"
          className={classes.input}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className={classes.button}
          onClick={handleAddTask}
          disabled={!input}
        >
          Add
        </button>
        <div className={classes.taskContainer}>
          {tasks &&
            tasks.map((task, index) => (
              <TaskCard
                key={index}
                id={index}
                task={task}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  taskContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  app: {
    textAlign: "center",
    backgroundColor: ({ theme }) => theme.background,
    minHeight: "100vh",
  },
  appHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: ({ theme }) => theme.primary,
    margin: 0,
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  button: {
    padding: "1rem",
  },
  input: {
    padding: "1rem",
  },
});
