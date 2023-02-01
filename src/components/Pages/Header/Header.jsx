import React from 'react'

import { getInCss } from '../../../global/functions/getInCss';
import { useConnectionStatus } from './ConnectionStatus'

import { useRecoilValue } from 'recoil';
import { userState } from '../../../global/Providers/user';
import { rulesState } from '../../../global/Providers/rules';
import { useMediaQuery } from '../../../global/useMediaQuery';

import Icon from '../../Atoms/Icon/Icon';
import logo from '../../../assets/images/logo-Coopalim.png'
import { Nav, Link, MediaQuery } from './Header.styled';
import Text from '../../Atoms/Text/Text';

const Header = () => {
    const { isLogged, logout } = useConnectionStatus()
    const user = useRecoilValue(userState)
    const rules = useRecoilValue(rulesState)
    
    const {isDesktop, isTablet, isMobile} = useMediaQuery()

    return (
        <>
            <Nav isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} >
                {(isDesktop || isTablet) && <img src={logo} alt="Logo"/>}
                <div>
                    <Link to='/'>
                        <div>
                            <Icon field='home' color={getInCss('--redCoopalim')} />
                           {(isDesktop) && <Text>Accueil</Text>}
                        </div>
                    </Link>
                </div>
                
                
                {(isLogged && rules) ? <>
                    {rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  &&
                        <div>
                            <Link to='/users'>
                                <div>
                                    <Icon field='users' color={getInCss('--redCoopalim')} />
                                    {(isDesktop) && <Text>Utilisateurs</Text>}
                                </div>
                            </Link>
                        </div>
                    }
                    
                        <div>
                            <Link  to='/calendar'>
                                <div>
                                    <Icon field='calendar' color={getInCss('--redCoopalim')} />
                                    {(isDesktop) && <Text>Planning</Text>}
                                </div>
                            </Link>
                        </div>

                    {rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  &&
                        <div>
                            <Link to='/configurations'>
                                <div>
                                    <Icon field='settings' color={getInCss('--redCoopalim')} />
                                    {(isDesktop) && <Text>Paramètres</Text>}
                                </div>
                            </Link>
                        </div>
                    }

                        <div>
                            <Link onClick={logout}>
                                <div>
                                    <Icon field='logout' color={getInCss('--redCoopalim')} />
                                    {(isDesktop) && <Text>Déconnexion</Text>}
                                </div>
                            </Link>
                        </div>
                </> :
                        <div>
                            <Link to='/login'>
                                <div>
                                    <Icon field='login' color={getInCss('--redCoopalim')} />
                                    {(isDesktop) && <Text>Connexion</Text>}
                                </div>
                            </Link>
                        </div>}
                <MediaQuery>{isDesktop && "Desktop"}{isTablet && "Tablet"}{isMobile && "Mobile"}</MediaQuery>
            </Nav>
        </>
    )
}

export default Header