import React, { useContext, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { TaskCard } from "../components/TaskCard";
import { TaskContext, ThemeContext } from "../contexts";

export default function HomePage() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { state: tasks, dispatch } = useContext(TaskContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [input, setInput] = useState<string>();

  function handleAddTask() {
    dispatch({ payload: input!, type: "ADD_TASK" });
  }

  function handleCompleteTask(id: string) {
    dispatch({ payload: id, type: "REMOVE_TASK" });
  }

  return (
    <div className={classes.app}>
      <div className={classes.appHeader}>
        <p>Your To Do</p>
      </div>
      <button
        onClick={() => {
          toggleTheme();
          console.log("called");
        }}
      >
        Toggle Theme
      </button>
      <div>
        <input
          placeholder="add new to do"
          className={classes.input}
          onChange={(e) => setInput(e.target.value)}
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
                onToggleComplete={handleCompleteTask}
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
  button: {
    padding: "1rem",
  },
  input: {
    padding: "1rem",
  },
});
