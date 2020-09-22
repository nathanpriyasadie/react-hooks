import React, { useRef, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Task } from "../types/interfaces";

interface TaskCardProps {
  task: Task;
  id: number;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}

type TaskCardState = "edit" | "normal";

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  task,
  onDelete,
  onEdit,
}) => {
  const [state, setState] = useState<TaskCardState>("normal");
  const { name } = task;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className={classes.cardContainer}>
      {state === "normal" ? (
        <p className={classes.title}>{name}</p>
      ) : (
        <input
          ref={ref}
          onBlur={() => {
            setState("normal");
            onEdit(id.toString(), ref.current?.value!);
          }}
          defaultValue={name}
        />
      )}
      <div>
        <p
          className={classes.editButton}
          onClick={() => {
            setState("edit");
          }}
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
