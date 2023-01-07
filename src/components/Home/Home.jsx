import React from 'react'
import styles from './Home.module.css'
import { useUser } from './UseUser'

const Home = () => {

    const user = useUser(null)

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>Home</h1>
            <section className={styles.core}>
                {user ?
                    <>
                        <p>Le nom de l'utilisateur en cours est : {user.login}</p>
                    </>
                    :
                    <p>Aucun utilisateur connecté</p>
                }
            </section>
        </main>
    )
}

export default Home