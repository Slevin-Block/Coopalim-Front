import React from 'react'
import {IconThermometer, IconHome, IconLogin, IconLogout, IconUserPlus, IconCalendar,
        IconAlertCircle, IconUser, IconUsers,IconPhone, IconMail, IconLetterCase,
        IconLetterCaseUpper, IconMapPin, IconQuestionMark, IconCreditCard,
        IconDeviceDesktopAnalytics, IconTrash, IconEdit, IconAlertTriangle,
        IconBoxMultiple, IconPrompt, IconClock, IconCalendarEvent, IconPlus,
        IconMinus, IconSearch, IconLetterA, IconLetterN, IconLoader,
        IconThumbUp, IconThumbDown, IconSettings, IconTools, IconChevronLeft, IconChevronRight}
        from '@tabler/icons';

import PropTypes from 'prop-types';

export const ToggleIconStep = {
        'address' : IconMapPin,
        'autonomous' : IconLetterA,
        'badge' : IconCreditCard,
        'Badge' : IconCreditCard,
        'calendar' : IconCalendar,
        'clock' : IconClock,
        'day' : IconCalendarEvent,
        'default' : IconQuestionMark,
        'delete' : IconTrash,
        'detail' : IconPrompt,
        'dislike' : IconThumbDown,
        'edit' : IconEdit,
        'firstname' : IconLetterCase,
        'home' : IconHome,
        'info' : IconAlertCircle,
        'lastname' : IconLetterCaseUpper,
        'left' : IconChevronLeft,
        'like' : IconThumbUp,
        'loader' : IconLoader,
        'Logiciel' : IconDeviceDesktopAnalytics,
        'login' : IconLogin,
        'logout' : IconLogout,
        'mail' : IconMail,
        'minus' : IconMinus,
        'novice' : IconLetterN,
        'phone' : IconPhone,
        'plus' : IconPlus,
        'right' : IconChevronRight,
        'signup' : IconUserPlus,
        "search" : IconSearch,
        "settings" : IconTools,
        'software' : IconDeviceDesktopAnalytics,
        'task' : IconBoxMultiple,
        'thermometer' : IconThermometer,
        'Thermomètre' : IconThermometer,
        'user' : IconUser,
        'users' : IconUsers,
        'warning' : IconAlertTriangle,
        'wheel' : IconSettings,


    }

const propTypes = {
    step: PropTypes.oneOf(Object.keys(ToggleIconStep))
}

/**
 * https://stackoverflow.com/questions/42813342/react-createelement-type-is-invalid-expected-a-string
 * @param {*} param0 
 * @returns 
 */
const Icon = ({field : step = 'default', color = '#aeb6be', size, className}) => {

    let Component
    if (Object.keys(ToggleIconStep).includes(step)) Component = ToggleIconStep[step]
    else                                            Component = ToggleIconStep['default']
    
    return (
        <Component color={color} size={size} className={className} />
    )
}

Icon.propTypes = propTypes

export default Icon