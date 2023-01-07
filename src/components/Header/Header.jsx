import React from 'react'
import { Link } from 'react-router-dom'
import { useConnectionStatus } from './ConnectionStatus'
import styles from './Header.module.css'



const Header = () => {
    const { isLogged, logout } = useConnectionStatus()

    return (
        <>
            <nav className={styles.wrapper}>
                <Link className={styles.link} to='/'>Home</Link>
                {isLogged ? <Link className={styles.link} onClick={logout} >Se déconnecter</Link> :
                            <Link className={styles.link} to='/login'>Se connecter</Link>}
            </nav>
        </>
    )
}

export default Header