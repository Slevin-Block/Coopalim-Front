import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { infoBulleState } from '../../../global/Providers/infoBulle'
import Text from '../Text/Text'
import { MyInfoBulle } from './InfoBule.styled'
import styles from "./InfoBulle.module.css"

const InfoBulle = ({label}) => {
    const [, setInfoBulle] = useRecoilState(infoBulleState)
    useEffect(() =>{

        const interval = setInterval(() => {
            setInfoBulle({open: false, msg:''})
        }, 3000);
        return () => clearInterval(interval);
    })
    return (
        <MyInfoBulle >
                <Text type="infoBulle">{label}</Text>
        </MyInfoBulle>
    )
}

export default InfoBulle