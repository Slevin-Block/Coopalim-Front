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
                        <Text >{`${Object.keys(user).map((key) => user[key]).join(" ")}`}</Text>

                        {rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  &&
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

                
                
            </section>
            
            
        </>
    )
}

export default Home