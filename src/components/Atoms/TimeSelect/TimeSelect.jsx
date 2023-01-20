import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { Global, NativeSelect, Wrapper } from './TimeSelect.styled';

const TimeSelect = ({label, field, defaultValue = new Date(1970, 0, 1, 8, 0, 0), getValue}) => {
    console.log(defaultValue.getHours())
    const [time, setTime] = useState(dayjs(defaultValue))

    const HandleHour = (e) =>  setTime(time => time.hour(e.target.value)) 
    const HandleMinute = (e) => setTime(time => time.minute(e.target.value)) 

    useEffect(()=> getValue && getValue(time.toDate()) ,[time])

    return (
        <>
            <Global name={field}>
                <Text type='label'>{label}</Text>
                <Wrapper>
                    <NativeSelect
                        data={['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22']}
                        /* description="Heure" */
                        icon={<Icon field='clock' size={14} />}
                        onChange={HandleHour}
                        defaultValue={time.hour()}
                    />
                    :
                    <NativeSelect
                        data={['00','15','30','45']}
                        /* description="Minute" */
                        /* icon={<Icon field='clock' size={14} />} */
                        onChange={HandleMinute}
                        defaultValue={time.minute()}
                    />
                </Wrapper>
            </Global>
        </>
    );
}

export default TimeSelect

