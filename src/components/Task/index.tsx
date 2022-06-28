import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  taskData: Task;
  onChangeTaskCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
export function Task({
  taskData,
  onChangeTaskCompleted,
  onDeleteTask,
}: TaskProps) {
  function handleChangeIsTaskCompleted() {
    onChangeTaskCompleted(taskData.id);
  }

  function handleDeleteTask() {
    onDeleteTask(taskData.id);
  }

  return (
    <div className={styles.taskContainer}>
      <input
        className={styles.todoCheckbox}
        type="checkbox"
        checked={taskData.completed}
        onChange={handleChangeIsTaskCompleted}
      />
      <p
        className={
          taskData.completed ? styles.taskCompleted : styles.taskDescription
        }
      >
        {taskData.description}
      </p>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={handleDeleteTask}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
