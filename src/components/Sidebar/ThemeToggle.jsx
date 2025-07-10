import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './sidebar.module.scss'

const ThemeToggle = ({ color, onToggle }) => {
  return (
    <div className={styles['sidebar--theme_section']}>
      <button
        onClick={onToggle}
        className={styles['sidebar--theme_toggle']}
        title={color === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      >
        <FontAwesomeIcon
          icon={color === 'light' ? 'moon' : 'sun'}
          className={styles['sidebar--theme_icon']}
        />
        <span className={styles['sidebar--theme_text']}>
          {color === 'light' ? 'Темная тема' : 'Светлая тема'}
        </span>
      </button>
    </div>
  )
}

export default ThemeToggle
