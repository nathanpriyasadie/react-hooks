import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { TaskCard } from "./components/TaskCard";
import { store } from "./context";

function App() {
  const classes = useStyles();
  const { state: tasks, dispatch } = useContext(store);
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
    backgroundColor: "#282c34",
    minHeight: "100vh",
  },
  appHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "white",
    margin: 0,
  },
  button: {
    padding: "1rem",
  },
  input: {
    padding: "1rem",
  },
});

export default App;
