import React from 'react'
import { Link } from 'react-router-dom'
import { useConnectionStatus } from './ConnectionStatus'
import styles from './Header.module.css'
import { IconHome, IconCalendar, IconLogin, IconLogout } from '@tabler/icons';

const Header = () => {
    const { isLogged, logout } = useConnectionStatus()

    return (
        <>
            <nav className={styles.wrapper}>
                <div><Link className={styles.link} to='/'>{/* Home */}<IconHome /></Link></div>
                {isLogged ? <>
                                <div><Link className={styles.link} to='/calendar' >{/* Planning */}<IconCalendar /></Link></div>
                                <div><Link className={styles.link} onClick={logout} >{/* Se déconnecter */}<IconLogout /></Link></div>
                            </> :
                            <div><Link className={styles.link} to='/login'>{/* Se connecter */}<IconLogin /></Link></div>}
            </nav>
        </>
    )
}

export default Header