import React, {useState} from 'react'
import styles from './TextField.module.css'

const TextField = ({label, className : classes}) => {
    const [myStyle] = useState(classes ? styles.p + " " + classes : styles.p)

    return (
        <p className={myStyle}>{label}</p>
    )
}

export default TextField