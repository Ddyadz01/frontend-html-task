import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { routes, bottomRoutes } from '../../constants/routes'
import SidebarLogo from './SidebarLogo'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'
import styles from './sidebar.module.scss'

const Sidebar = ({ color, setTheme }) => {
  const [isOpened, setIsOpened] = useState(true)
  const { pathname } = useLocation()

  const toggleSidebar = () => {
    setIsOpened((prev) => !prev)
  }

  const toggleTheme = () => {
    setTheme(color === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      data-theme={color === 'dark' ? 'dark' : 'light'}
      className={isOpened ? styles.sidebar : styles['sidebar--closed']}
    >
      <SidebarLogo isOpened={isOpened} onToggle={toggleSidebar} />

      <div className={styles['sidebar--routes']}>
        <div className={styles['sidebar--routes__items']}>
          {routes.map((route) => (
            <NavLink key={route.title} route={route} isActive={pathname === route.path} />
          ))}
        </div>

        <div className={styles['sidebar--bottom_content']}>
          <div className={styles['sidebar--routes__items']}>
            {bottomRoutes.map((route) => (
              <NavLink key={route.title} route={route} isActive={pathname === route.path} />
            ))}
          </div>

          <ThemeToggle color={color} onToggle={toggleTheme} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
