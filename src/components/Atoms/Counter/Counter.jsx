import React, { useEffect } from 'react'
import { useState } from 'react';
import { ActionIcon, TextInput } from '@mantine/core';
import { useStyles } from './MantineCounterStyle';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';



export const Counter = ({ label = "", min = 0, max = 10, defaultValue, field = "", onChange}) => {
    const { classes } = useStyles();
    const [value, setValue] = useState(defaultValue || min);

    const handleChange = (e) =>{
            if (/\d/.test(e.toString().slice(-1)) || e === '') {
                ((e <= max && e >= min) || e === '') && setValue(parseInt(e))
            }
    }

    useEffect(() => {onChange && onChange(value)} ,[value])

    return (
        <>
            <div className={classes.global}>
                <Text type='label'>{label}</Text>
                <div className={classes.wrapper}>
                    <ActionIcon size={28} variant="transparent" className={classes.control}
                        onClick={() => handleChange(value-1)}
                        disabled={value === min}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <Icon field='minus' size={16} />
                    </ActionIcon>

                    <TextInput  name={field} value={value} onChange={(e) => handleChange(e.target.value) }
                          classNames={{ input: classes.input }}
                    />

                    <ActionIcon size={28} variant="transparent" className={classes.control}
                        onClick={() => handleChange(value+1)}
                        disabled={value === max}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <Icon field='plus' size={16} />
                    </ActionIcon>

                </div>
            </div>
        </>

    );
}

export default Counter

{/* <InputNumber value={value} {...register(field)} handleChange = {(e) => setValue(e.target.value) } /> */}