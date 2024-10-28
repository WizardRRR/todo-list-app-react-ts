import styles from './app.module.css'
import Button from './components/button/button'
import Header from './components/header/header'
import VisibilityOff from './components/icons/visibility-off'
import Input from './components/input/input'
import Tasks from './components/tasks/tasks'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <hr className={styles.line} />
      <div className={styles['button-wrapper']}>
        <Button
          prefixElement={<VisibilityOff fill='var(--secondary-text)' />}
          title='Ocultar concluidos'
        />
      </div>
      <Tasks />
      <div className={styles['input-wrapper']}>
        <Input placeholder='Nueva Nota' onChange={() => {}} value='' />
      </div>
    </div>
  )
}
