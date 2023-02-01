import React from 'react'
import Button from '../../Atoms/Button/Button'
import Title from '../../Atoms/Title/Title'
import Text from '../../Atoms/Text/Text'
import { BoxIndicator, BoxTitle, Card, List } from './LiskTask.styled'
import dayjs from 'dayjs'
import 'dayjs/locale/fr';
import Icon from '../../Atoms/Icon/Icon'
import Indicator from '../../Atoms/Indicator/Indicator'
import { getInCss } from '../../../global/functions/getInCss'

const ListTask = ({opened, onClose, onLoad, onDelete, data = [], isAdmin}) => {

    if (!data || !data.at(0).startTime) onClose()
    return (
        <List opened={opened} onClose={onClose} centered overflow="inside">
            <BoxTitle>
                <Title level={2}>Les tâches du</Title>
                <Title level={3}>{dayjs(new Date(data.at(0).startTime)).locale('fr').format('dddd DD MMMM YYYY')}</Title>
            </BoxTitle>

            {data && data.map((task, i) =>
                <Card key={`${task._id}`} >

                    <Text className="label" type='important' >{task.label}</Text>
                    <Text className="startTime">{dayjs(new Date(task.startTime)).format('HH : mm')}</Text>
                    <Text className="endTime">{dayjs(new Date(task.endTime)).format('HH : mm')}</Text>

                    <Button className={isAdmin ? "explorer" : "control"} onClick={() => onLoad(task._id)} small={true} color='transparent'>
                        <Icon field='search' size={18} color={getInCss('--blueCoopalim')} />
                    </Button>

                    {isAdmin && <Button className="delete"
                                        onClick={() => { onDelete(task._id) }}
                                        small={true}
                                        color='transparent' >
                                    <Icon field='delete' size={18} color={getInCss('--redCoopalim')} />
                                </Button>
                    }
                    
                    <BoxIndicator className='zone'>
                        <Indicator disabled={!task.isUrgent} />
                    </BoxIndicator>
                </Card>
            )}
        </List>
    )
}

export default ListTask