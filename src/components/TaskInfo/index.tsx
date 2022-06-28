import styles from "./TaskInfo.module.css";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskInfoProps {
  tasks: Task[];
}

export function TaskInfo({ tasks }: TaskInfoProps) {
  const completedTasks = tasks.reduce((prev, curr) => {
    if (curr.completed) {
      prev++;
    }
    return prev;
  }, 0);

  return (
    <div className={styles.taskInfo}>
      <div className={styles.taskCreated}>
        <p>Tarefas criadas</p>
        <span>{tasks.length}</span>
      </div>

      <div className={styles.taskCompleted}>
        <p>Concluídas</p>
        <span>
          {completedTasks > 0 ? `${completedTasks} de ${tasks.length}` : "0"}
        </span>
      </div>
    </div>
  );
}
