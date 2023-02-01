import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { Global, NativeSelect, Wrapper } from './TimeSelect.styled';

const TimeSelect = ({label, field, defaultValue = new Date(1970, 0, 1, 13, 0, 0), setValue, className, disabled}) => {

    const [time, setTime] = useState(dayjs(defaultValue))
    const HandleHour = (e) =>  setTime(time => time.hour(e.target.value)) 
    const HandleMinute = (e) => setTime(time => time.minute(e.target.value)) 

    useEffect(()=> setValue && setValue(time.toDate()) ,[time])

    return (
        <>
            <Global name={field} className={className}>
                <Text type='label'>{label}</Text>
                <Wrapper>
                    <NativeSelect
                        data={['07','08','09','10','11','12','13','14','15','16','17','18','19','20','21']}

                        icon={<Icon field='clock' /* size={14} */ />}
                        onChange={HandleHour}
                        defaultValue={time.hour()-1}
                        disabled={disabled}
                    />
                    <NativeSelect
                        data={['00','15','30','45']}
                        onChange={HandleMinute}
                        defaultValue={time.minute()}
                        disabled={disabled}
                    />
                </Wrapper>
            </Global>
        </>
    );
}

export default TimeSelect

