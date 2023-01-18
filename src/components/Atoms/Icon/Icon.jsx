import React from 'react'
import { IconThermometer, IconHome, IconLogin, IconLogout, IconUserPlus, IconCalendar, IconAlertCircle, IconUser, IconUsers,IconPhone, IconMail, IconLetterCase, IconLetterCaseUpper, IconMapPin, IconQuestionMark, IconCreditCard, IconDeviceDesktopAnalytics, IconTrash, IconEdit, IconAlertTriangle } from '@tabler/icons';

import PropTypes from 'prop-types';
import { getInCss } from '../../../global/functions/getInCss';

const ToggleIconStep = {
        'thermometer' : IconThermometer,
        'Thermomètre' : IconThermometer,
        'home' : IconHome,
        'login' : IconLogin,
        'logout' : IconLogout,
        'calendar' : IconCalendar,
        'info' : IconAlertCircle,
        'user' : IconUser,
        'users' : IconUsers,
        'signup' : IconUserPlus,
        'phone' : IconPhone,
        'mail' : IconMail,
        'firstname' : IconLetterCase,
        'lastname' : IconLetterCaseUpper,
        'address' : IconMapPin,
        'default' : IconQuestionMark,
        'badge' : IconCreditCard,
        'Badge' : IconCreditCard,
        'delete' : IconTrash,
        'edit' : IconEdit,
        'software' : IconDeviceDesktopAnalytics,
        'Logiciel' : IconDeviceDesktopAnalytics,
        'warning' : IconAlertTriangle,
    }

const propTypes = {
    step: PropTypes.oneOf(Object.keys(ToggleIconStep))
}

/**
 * https://stackoverflow.com/questions/42813342/react-createelement-type-is-invalid-expected-a-string
 * @param {*} param0 
 * @returns 
 */
const Icon = ({field : step = 'default', color = '#aeb6be', size}) => {
    const Component = ToggleIconStep[step ? step : 'default']
    
    return (
        <Component color={color} size={size}/>
    )
}

Icon.propTypes = propTypes

export default Icon