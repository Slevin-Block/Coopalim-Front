import React from 'react'
import {IconThermometer, IconHome, IconLogin, IconLogout, IconUserPlus, IconCalendar,
        IconAlertCircle, IconUser, IconUsers,IconPhone, IconMail, IconLetterCase,
        IconLetterCaseUpper, IconMapPin, IconQuestionMark, IconCreditCard,
        IconDeviceDesktopAnalytics, IconTrash, IconEdit, IconAlertTriangle,
        IconBoxMultiple,
        IconPrompt,
        IconClock,
        IconCalendarEvent,
        IconPlus,
        IconMinus} from '@tabler/icons';

import PropTypes from 'prop-types';

const ToggleIconStep = {
        'address' : IconMapPin,
        'badge' : IconCreditCard,
        'Badge' : IconCreditCard,
        'calendar' : IconCalendar,
        'clock' : IconClock,
        'day' : IconCalendarEvent,
        'default' : IconQuestionMark,
        'delete' : IconTrash,
        'detail' : IconPrompt,
        'edit' : IconEdit,
        'firstname' : IconLetterCase,
        'home' : IconHome,
        'info' : IconAlertCircle,
        'lastname' : IconLetterCaseUpper,
        'Logiciel' : IconDeviceDesktopAnalytics,
        'login' : IconLogin,
        'logout' : IconLogout,
        'mail' : IconMail,
        'minus' : IconMinus,
        'phone' : IconPhone,
        'plus' : IconPlus,
        'signup' : IconUserPlus,
        'software' : IconDeviceDesktopAnalytics,
        'task' : IconBoxMultiple,
        'thermometer' : IconThermometer,
        'Thermomètre' : IconThermometer,
        'user' : IconUser,
        'users' : IconUsers,
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