import React from 'react'
import { Link } from 'react-router-dom'
import { useConnectionStatus } from './ConnectionStatus'
import styles from './Header.module.css'



const Header = () => {
    const { isLogged, logout } = useConnectionStatus()

    return (
        <>
            <nav className={styles.wrapper}>
                <div><Link className={styles.link} to='/'>Home</Link></div>
                {isLogged ? <>
                                <div><Link className={styles.link} to='/calendar' >Planning</Link></div>
                                <div><Link className={styles.link} onClick={logout} >Se déconnecter</Link></div>
                            </> :
                            <div><Link className={styles.link} to='/login'>Se connecter</Link></div>}
            </nav>
        </>
    )
}

export default Header