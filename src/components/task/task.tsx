import styles from './task.module.css'
interface TaskProps {
  title: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}
export default function Task({ title, checked, onChange }: TaskProps) {
  return (
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
  )
}
