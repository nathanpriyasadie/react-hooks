import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Task } from "../types/interfaces";

interface TaskCardProps {
  task: Task;
  id: number;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  task,
  onDelete,
  onEdit,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.cardContainer}>
      <p className={classes.title}>{task.name}</p>
      <div>
        <p
          className={classes.editButton}
          onClick={() => onDelete(id.toString())}
        >
          Edit
        </p>
        <p
          className={classes.deleteButton}
          onClick={() => onDelete(id.toString())}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  cardContainer: {
    padding: "1rem",
    backgroundColor: ({ theme }) => theme.secondary,
    display: "flex",
    width: "14.5rem",
    marginTop: " 1rem",
    alignSelf: "center",
    justifyContent: "space-between",
    textDecorationStyle: "solid",
  },
  title: {
    alignSelf: "center",
  },
  editButton: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  deleteButton: {
    color: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
