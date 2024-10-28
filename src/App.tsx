import styles from './app.module.css'
import { Button, Header, Input, Tasks } from './components'
import { VisibilityOff } from './components/icons'

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
