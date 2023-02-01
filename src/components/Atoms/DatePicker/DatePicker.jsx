import React, { useState, useEffect } from 'react'
import Icon from '../Icon/Icon';
import { Tooltip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import 'dayjs/locale/fr';
import { MyDatePicker } from './MantineDatePickerStyle'

const DatePicker = ({label, placeholder, tooltipLabel, setValue, defaultValue, fixedDay, className, disabled}) => {

    const [value, onChange] = useState(new Date(defaultValue));
    useEffect(() =>{ setValue && setValue(value) }, [value])

    return (
        <MyDatePicker
            className={className}
            locale="fr"
            label={label}
            placeholder={placeholder}
            icon={<Icon field={'calendar'} />}
            value={value}
            onChange={onChange}
            inputFormat="DD MMMM YYYY"
            clearable
            disabled={disabled}
            excludeDate={(date) => fixedDay ? date.getDay() !== fixedDay : false}
            rightSection={ tooltipLabel &&
                    <>
                        <Tooltip label={tooltipLabel} position="top-end" withArrow>
                            <div>
                                <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                            </div>
                        </Tooltip>
                    </>
            }
        />
    );
}

export default DatePicker

