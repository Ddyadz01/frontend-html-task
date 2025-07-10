import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'
import styles from './sidebar.module.scss'

const SidebarLogo = ({ isOpened, onToggle }) => {
  return (
    <div className={styles['sidebar--logo']}>
      <img src={logo} alt="TensorFlow logo" />
      <span>TensorFlow</span>
      <div onClick={onToggle} className={styles['sidebar--toggle__btn']}>
        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
      </div>
    </div>
  )
}

export default SidebarLogo
