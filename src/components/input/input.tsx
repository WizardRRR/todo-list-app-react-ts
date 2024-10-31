import styles from './input.module.css'

interface InputProps {
  placeholder: string
  value?: string
  onChange?: (value: string) => void
  name?: string
}

export function Input({ placeholder, onChange, value, name }: InputProps) {
  return (
    <input
      className={styles.input}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  )
}
