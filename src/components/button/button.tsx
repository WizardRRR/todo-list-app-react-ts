import styles from './button.module.css'

interface ButtonProps {
  title: string
  prefixElement?: React.ReactNode
  onClick?: () => void
}
export default function Button({ title, prefixElement, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {prefixElement}
      {title}
    </button>
  )
}
