import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../../global/Providers/user'
import Title from '../../Atoms/Title/Title'
import Text from '../../Atoms/Text/Text'
import Icon from '../../Atoms/Icon/Icon'
import { getInCss } from '../../../global/functions/getInCss'
import { rulesState } from '../../../global/Providers/rules'
import { Group, Section, Link, List } from './Home.styled'
import { useMediaQuery } from '../../../global/useMediaQuery';

const Home = () => {
    const user = useRecoilValue(userState)
    const rules = useRecoilValue(rulesState)

    const {isDesktop, isTablet, isMobile} = useMediaQuery()

    return (
        <>
            <Section isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
                <Title level={1}>Accueil</Title>
                <Title level={3}>Bienvenue sur la page d'accueil de la gestion de tâche de Coopalim.</Title>
                {user ?
                    <>
                        <List>
                            {rules && rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  ?
                                <Group>
                                    <Title level={3}>Menu rapide</Title>
                                    <Link to='/signup'>{'Créer un compte '}<Icon field='signup' color={getInCss('--redCoopalim')} /></Link>
                                </Group>
                                :
                                <Group>
                                    <Title level={3}>Info</Title>
                                    <Text > <Icon field='like' color={getInCss('--blueCoopalim')} size={16} />
                                            {` Vous pouvez vous inscrire librement aux créneaux créés par les coordinateurs.`}
                                    </Text>
                                    <Text > <Icon field='warning' color={getInCss('--redCoopalim')} size={16} />
                                            {` Mais pour toutes désinscriptions à un créneau, vous devez faire une demande au coordinateur.`}
                                    </Text>
                                </Group>
                            }
                        </List>
                    </>
                    :
                        <>
                            <Text >Vous n'est pas encore connecté !</Text>
                            <List>
                                <Group>
                                    <Text >Veuillez vous identifier ici :</Text>
                                    <Link to='/login'>Se connecter <Icon field='login' color={getInCss('--redCoopalim')} /></Link>
                                </Group>
                                <Group>
                                    <Text >Si vous n'avez pas encore de compte :</Text>
                                    <Text >Veuillez contactez un adminitrateur pour vous créer un compte.</Text>
                                </Group>
                            </List>
                        </>
                }
            </Section>
            
        </>
    )
}

export default Home