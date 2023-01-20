import React from 'react'
import { DatePicker as MantineDatePicker} from '@mantine/dates';
import Icon from '../Icon/Icon';
import { Tooltip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import 'dayjs/locale/fr';

const DatePicker = ({label, register, field, placeholder, tooltipLabel, defaultValue, error, fixedDay}) => {
    console.log(fixedDay)
    return (
        <MantineDatePicker
            locale="fr"
            label={label}
            placeholder={placeholder}
            {...register(field)}
            icon={<Icon field={'clock'} />}
            defaultValue={defaultValue}
            clearable
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

