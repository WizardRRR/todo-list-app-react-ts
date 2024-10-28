import Task from '../task/task'
import styles from './tasks.module.css'

export default function Tasks() {
  return (
    <div className={styles.tasks}>
      <p>3 concluidos</p>
      <Task title='Pasear al perro de la calle. Tarea 1, 2 y 3, Tarea 1' />
      <Task title='Tarea 2' />
      <Task title='Tarea 3' />
    </div>
  )
}
