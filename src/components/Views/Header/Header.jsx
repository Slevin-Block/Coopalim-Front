import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../Atoms/Icon/Icon';

import styles from './Header.module.css'

import { useConnectionStatus } from './ConnectionStatus'
import { getInCss } from '../../../global/functions/getInCss';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../global/Providers/user';
import { rulesState } from '../../../global/Providers/rules';

const Header = () => {
    const { isLogged, logout } = useConnectionStatus()
    const user = useRecoilValue(userState)
    const rules = useRecoilValue(rulesState)

    return (
        <>
            <nav className={styles.wrapper}>
                <div><Link className={styles.link} to='/'>{/* Home */}<Icon field='home' color={getInCss('--redCoopalim')} /></Link></div>
                {(isLogged && rules) ? <>
                    {rules.filter(rule => ['Coordinateur'].includes(rule.label)).map(rule => rule._id).includes(user.rule)  &&
                        <div>
                            <Link className={styles.link} to='/users'>
                                <Icon field='users' color={getInCss('--redCoopalim')} />
                            </Link>
                        </div>
                    }
                        <div>
                            <Link className={styles.link} to='/calendar'>
                                <Icon field='calendar' color={getInCss('--redCoopalim')} />
                            </Link>
                        </div>
                        <div>
                            <Link className={styles.link} onClick={logout}>
                                <Icon field='logout' color={getInCss('--redCoopalim')} />
                            </Link>
                        </div>
                </> :
                        <div>
                            <Link className={styles.link} to='/login'>
                                <Icon field='login' color={getInCss('--redCoopalim')} />
                            </Link>
                        </div>}
            </nav>
        </>
    )
}

export default Header