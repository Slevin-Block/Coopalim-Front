import React from 'react'
import { TimeInput as MantineTimeInput} from '@mantine/dates';
import Icon from '../Icon/Icon';
import { Tooltip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

const TimeInput = ({label, register, field, placeholder, tooltipLabel, defaultValue, error}) => {
    return (
        <MantineTimeInput
            label={label}
            placeholder={placeholder}
            {...register(field)}
            icon={<Icon field={'clock'} />}
            defaultValue={defaultValue}
            clearable
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

export default TimeInput

