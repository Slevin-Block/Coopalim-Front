import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { sessionState } from '../../../global/Providers/session'
import MultiSelect from '../../Atoms/MultiSelect/MultiSelect'
import useSWR from 'swr'
import fetcher from '../../../global/functions/fetcher'
import { attributionsState } from '../../../global/Providers/attributions'
import { rulesState } from '../../../global/Providers/rules'
import { Select } from '@mantine/core'
import Icon from '../../Atoms/Icon/Icon'
import { useEffect } from 'react'

const MultiSelectParticipators = ({label, className, defaultValue, setValue, disabled}) => {

    const session = useRecoilValue(sessionState)
    const globalAttributions = useRecoilValue(attributionsState)
    const globalRules = useRecoilValue(rulesState)
    const [value, onChange] = useState(defaultValue || [])

    const {data} = useSWR(  ['/users', 'GET', null, session?.token],
                                    ([url, method, payload, token])=> fetcher(url, method, payload, token))
    
    
    let base = null
    
    if (data && globalAttributions && data?.status === 200){

        base = data.data.map(user => {
            const base = `${user.firstname} ${user.lastname}`
            const attIconLabels = user.attributions.map(att => globalAttributions.find(a => a._id === att).label)
            const ruleIconLabels = user.isAutonomous ? "autonomous" : "novice"
            
            return {label : base, attIconLabels, ruleIconLabels, value : user.id}
        })
    }

    useEffect(() => { setValue(value) }, [value])

    
    if (!base) return <MultiSelect label={label} className={className} placeholder={'Chargement ...'} disabled={true} />
    return (
        <>
            
            <MultiSelect
                label={label}
                className={className}
                data={base}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </>
    )
}

export default MultiSelectParticipators