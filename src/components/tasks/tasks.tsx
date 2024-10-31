import { Task } from '../../types/task'
import { Task as TaskComponent } from '../task/task'
import styles from './tasks.module.css'
interface TasksProps {
  tasks: Task[]
  concludedTask: number
  onCheckedTask: (id: string, checked: boolean) => void
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
}
export function Tasks({
  tasks,
  concludedTask,
  onCheckedTask,
  onEdit,
  onDelete
}: TasksProps) {
  return (
    <div className={styles.tasks}>
      <p>{concludedTask} concluidos</p>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          onDelete={onDelete}
          onEdit={onEdit}
          task={task}
          onChange={(checked) => onCheckedTask(task.id, checked)}
        />
      ))}
    </div>
  )
}
