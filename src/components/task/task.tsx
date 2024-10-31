import { useEffect, useRef, useState } from 'react'
import { Task as TaskType } from '../../types/task'
import { MoreVert } from './../icons'
import styles from './task.module.css'
interface TaskProps {
  task: TaskType
  onChange?: (checked: boolean) => void
  onDelete: (id: string) => void
  onEdit: (task: TaskType) => void
}
export function Task({ onChange, task, onDelete, onEdit }: TaskProps) {
  const { title, checked, id, createdAt } = task
  const [showOptions, setShowOptions] = useState(false)
  const [canEdit, setCanEdit] = useState(false)
  const refEditInput = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const elementId = (e.target as HTMLElement).dataset.id
      if (elementId !== id) {
        setShowOptions(false)
        setCanEdit(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [id])

  const handleClickEdit = () => {
    setCanEdit(true)
    setShowOptions(false)
    setTimeout(() => refEditInput?.current?.focus(), 100)
  }

  const handleClickDelete = () => {
    setShowOptions(false)
    onDelete(id)
  }

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault()
    const taskTitle = (e.target as HTMLFormElement).task.value
    const newTask = { id, title: taskTitle, checked, createdAt }
    setCanEdit(false)
    onEdit(newTask)
  }

  return (
    <div className={styles.task}>
      {!canEdit && (
        <label
          style={{ textDecoration: checked ? 'line-through' : 'none' }}
          className={styles.checkbox}
        >
          <input
            onChange={(e) => onChange?.(e.target.checked)}
            type='checkbox'
            checked={checked}
          />
          <span className={styles.checkmark}></span>
          {title}
        </label>
      )}
      {canEdit && (
        <form onSubmit={handleSubmitEdit} className={styles['edit-form']}>
          <input
            ref={refEditInput}
            data-id={id}
            name='task'
            type='text'
            defaultValue={title}
          />
        </form>
      )}
      <button data-id={id} onClick={() => setShowOptions(!showOptions)}>
        <MoreVert pointerEvents='none' />
      </button>
      <div
        className={`${styles.options} ${showOptions ? styles['show-options'] : ''}`}
      >
        <button data-id={id} onClick={handleClickEdit}>
          Editar
        </button>
        <button onClick={handleClickDelete}>Eliminar</button>
      </div>
    </div>
  )
}
