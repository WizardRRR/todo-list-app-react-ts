import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <h1>to do list</h1>
        <p>Deja de procrastinar!</p>
      </div>
      <img src='https://random.imagecdn.app/500/150' alt='Foto de perfil' />
    </div>
  )
}
