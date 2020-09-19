import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Task } from "../types/interfaces";

interface TaskCardProps {
  task: Task;
  id: number;
  onToggleComplete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  task,
  onToggleComplete,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div
      className={classes.cardContainer}
      onClick={() => onToggleComplete(id.toString())}
    >
      <p style={task.done ? { textDecorationLine: "line-through" } : undefined}>
        {task.name}
      </p>
    </div>
  );
};

const useStyles = createUseStyles({
  cardContainer: {
    padding: "1rem",
    backgroundColor: "white",
    width: "14.5rem",
    marginTop: " 1rem",
    alignSelf: "center",
    textDecorationStyle: "solid",
    "&:hover": {
      backgroundColor: ({ theme }) => theme.colorDanger,
      cursor: "pointer",
    },
  },
});
