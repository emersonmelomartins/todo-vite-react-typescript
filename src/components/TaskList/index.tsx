import { Task } from "../Task";
import clipboardSvg from "../../assets/clipboard.svg";
import styles from "./TaskList.module.css";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskChangeCompleted: (id: string) => void;
  onTaskDeleted: (id: string) => void;
}

export function TaskList({
  tasks,
  onTaskChangeCompleted,
  onTaskDeleted,
}: TaskListProps) {
  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            taskData={task}
            onChangeTaskCompleted={() => onTaskChangeCompleted(task.id)}
            onDeleteTask={() => onTaskDeleted(task.id)}
          />
        ))
      ) : (
        <div className={styles.taskEmpty}>
          <img src={clipboardSvg} alt="Ícone de uma prancheta" width="56" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer.</p>
        </div>
      )}
    </div>
  );
}
