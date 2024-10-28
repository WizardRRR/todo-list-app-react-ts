import styles from './input.module.css'

interface InputProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export function Input({ placeholder, onChange, value }: InputProps) {
  return (
    <input
      className={styles.input}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  )
}
