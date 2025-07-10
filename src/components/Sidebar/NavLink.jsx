import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.scss'

const NavLink = ({ route, isActive }) => {
  return (
    <Link to={route.path} className={isActive ? styles.active : ''}>
      <FontAwesomeIcon icon={route.icon} />
      <span>{route.title}</span>
    </Link>
  )
}

export default NavLink
