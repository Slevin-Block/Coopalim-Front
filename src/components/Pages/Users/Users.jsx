import React from 'react'
import Title from '../../Atoms/Title/Title'
import Card from '../../Molecules/Card/Card'
import Loader from '../Loader/Loader'
import {useUsers} from './useUsers'
import { Section, Wrapper } from './Users.styled';
import { useMediaQuery } from '../../../global/useMediaQuery';

const Users = () => {

    const {isLoading, action, data} = useUsers()
    const {isDesktop, isTablet, isMobile} = useMediaQuery()

    if (isLoading) return (<Loader />)
    return (
        <Section >
            <Title level={1} >Liste des Membres</Title>
            { data?.status === 200 && 
            <Wrapper type="scroll" offsetScrollbars isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
                {data.data.map((user) =>
                    <Card key={user.id} user={user} action={action} />
                )}
            </Wrapper>}
        </Section>
    )
}

export default Users