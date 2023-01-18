import React from 'react'
import styles from './Users.module.css'

import Title from '../../Atoms/Title/Title'
import { ScrollArea } from '@mantine/core';
import HeadbandField from '../../Molecules/HeadbandField/HeadbandField'
import Loader from '../Loader/Loader'
import {useUsers} from './useUsers'

const Users = () => {

    const {isLoading, action, data} = useUsers()


    if (isLoading) return (<Loader />)

    return (
        <section className={styles.section}>
            <Title level={1} >Liste des Membres</Title>
            { data?.status === 200 && 
            <ScrollArea className={styles.wrapper} type="scroll" offsetScrollbars>
                {data.data.map((user) => <HeadbandField key={user.id} user={user} action={action} />)}
            </ScrollArea>}
        
        </section>
    )
}

export default Users