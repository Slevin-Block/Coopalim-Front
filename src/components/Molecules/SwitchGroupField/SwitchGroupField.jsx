import React, {useState, useEffect} from 'react'
import Text from '../../Atoms/Text/Text'
import styles from './SwitchGroupField.module.css'

const SwitchGroupField = ({label, group = [], defaultValue = false, getValue, desactived = false, minify = false}) => {

    const [value, setValue] = useState(defaultValue)

    useEffect(() => { getValue && getValue(value) },[value])

    if (group.length !== 2) return <>{"Error : array[2] needed"}</>
    return (
        <div>
            <Text type='label'>{label}</Text>
            <div className={`${styles.group}`} >
                {minify && 
                    <div onClick={() => !desactived && setValue(value => !value)} className={`${styles.info} ${styles.selected}`}>
                        <Text>{group[value ? 1 : 0]}</Text>
                    </div>
                }
                {!minify &&
                    <>
                        <div onClick={() => !desactived && setValue(false)} className={`${styles.info} ${!value ? styles.selected : ""}`}>
                            <Text >{group[0]}</Text>
                        </div>
                        <div onClick={() => !desactived && setValue(true)} className={`${styles.info} ${value ? styles.selected : ""}`}>
                            <Text >{group[1]}</Text>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default SwitchGroupField