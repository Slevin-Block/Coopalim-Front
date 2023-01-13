import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { infoBulleState } from '../../global/Providers/infoBulle'
import { userState } from '../../global/Providers/user'
import TitleField from '../Atoms/TitleField/TitleField'
import TextField from '../Atoms/TextField/TextField'
import styles from './Home.module.css'

const Home = () => {

    const [, setInfoBulle] = useRecoilState(infoBulleState)
    const user = useRecoilValue(userState)
    
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