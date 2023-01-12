import React, {useState} from 'react'
import styles from "./TitleField.module.css"

const TitleField = ({ label, level = 1, className : classes = undefined}) => {
    const [myStyle] = useState(classes ? styles[`h${level}`] + " " + classes : styles[`h${level}`])
    if (level === 1) return <h1 className={myStyle}>{label}</h1>
    if (level === 2) return <h2 className={myStyle}>{label}</h2>
    if (level === 3) return <h3 className={myStyle}>{label}</h3>
}

export default TitleField