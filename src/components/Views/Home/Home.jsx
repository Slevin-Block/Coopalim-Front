import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from '../../../global/Providers/user'
import Title from '../../Atoms/Title/Title'
import Text from '../../Atoms/Text/Text'
import styles from './Home.module.css'
import Icon from '../../Atoms/Icon/Icon'
import { getInCss } from '../../../global/functions/getInCss'
import { rulesState } from '../../../global/Providers/rules'
import Button from '../../Atoms/Button/Button'
import { infoBulleState } from '../../../global/Providers/infoBulle'
import Counter from '../../Atoms/Counter/Counter'
import TimeSelect from '../../Atoms/TimeSelect/TimeSelect'

const Home = () => {
    const user = useRecoilValue(userState)
    const rules = useRecoilValue(rulesState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)

    return (
        <>
            <section className={styles.section}>
                <Title level={1}>Accueil</Title>
                <Title level={3}>Bienvenue sur la page d'accueil de la gestion de tâche de Coopalim.</Title>
                <Button onClick={() => setInfoBulle({open : true, msg : `Connection établie`})}>InfoBulle</Button>
                {user ?
                    <>
                        <Text >{`Le nom de l'utilisateur en cours est : ${user.login}`}</Text>
                        {/* <Text >{`${Object.keys(user).map((key) => user[key]).join(" ")}`}</Text> */}

                        {rules && rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  &&
                            <div className={styles.group}>
                                <Title level={3}>Menu rapide</Title>
                                <Link className={styles.link} to='/signup'>{'Créer un compte '}<Icon field='signup' color={getInCss('--redCoopalim')} /></Link>
                            </div>}
                    </>
                    :
                        <>
                            <Text >Vous n'est pas encore connecté !</Text>
                            <div className={styles.list}>
                                <div className={styles.group}>
                                    <Text >Veuillez vous identifier ici :</Text>
                                    <Link className={styles.link} to='/login'>Se connecter <Icon field='login' color={getInCss('--redCoopalim')} /></Link>
                                </div>
                                <div className={styles.group}>
                                    <Text >Si vous n'avez pas encore de compte :</Text>
                                    <Text >Veuillez contactez un adminitrateur pour vous créer un compte.</Text>
                                </div>
                            </div>
                        </>
                }


                <TimeSelect 
                    label='Heure de début'
                    field='startTime'
                    defaultValue={new Date(2018, 0, 1, 11, 15)}
                    getValue={(time => console.log(time))}
                />

                {/* 
                    Pour charger les hours dans la bonne date utiliser les méthodes :
                        time.setHours(time2.getHours())     // pour les heures
                        time.setMinutes(time2.getMinutes()) // pour les heures
                 */}
            </section>
            
            
        </>
    )
}

export default Home