import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { infoBulleState } from '../../Providers/infoBulle'
import styles from "./InfoBulle.module.css"

const InfoBulle = ({msg, label}) => {
    const [, setInfoBulle] = useRecoilState(infoBulleState)
    useEffect(() =>{

        const interval = setInterval(() => {
            setInfoBulle({open: false, msg:''})
        }, 3000);
        return () => clearInterval(interval);
    })
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <p className={styles.label}>{label}</p>
            </div>
        </div>
    )
}

export default InfoBulle