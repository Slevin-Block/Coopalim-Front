import React from 'react'
import { useRecoilState } from 'recoil'
import { infoBulleState } from '../../Providers/infoBulle'
import TextField from '../Atoms/TextField/TextField'
import TitleField from '../Atoms/TitleField/TitleField'
import styles from './Home.module.css'
import { useUser } from './UseUser'

const Home = () => {
    const user = useUser(null)

    const [, setInfoBulle] = useRecoilState(infoBulleState)
    
    return (
        <>
            <section className={styles.section}>
                <TitleField label="Accueil" level={1}/>
                <TitleField label={`
                        Bienvenue sur la page d'accueil de la gestion de tâche de Coopalim.
                `} level={3}/>

                {user ?
                    <>
                        <TextField label={`Le nom de l'utilisateur en cours est : ${user.login}`} />
                    </>
                    :
                    <TextField label={`Aucun utilisateur connecté`} />
                }

                <button onClick={() => setInfoBulle({open : true, msg : "Coucou"})}>Info Bulle</button>
                
            </section>
            
            
        </>
    )
}

export default Home