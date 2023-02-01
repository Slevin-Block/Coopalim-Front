import React from 'react'
import GlobalForm from '../../Organisms/GlobalForm/GlobalForm'

import { rulesState } from '../../../global/Providers/rules'
import { attributionsState } from '../../../global/Providers/attributions'
import { useState } from 'react'

const Configuration = () => {
    const [stepMenu, setStepMenu] = useState(0)

    return (
        <>
            {stepMenu === 0 &&
                <GlobalForm
                    onChangeMenu={(val) => setStepMenu((stepMenu +2 + val)%2)}
                    data={{
                        path : '/rules',
                        label : 'rôles',
                        state : rulesState,
                        fields :[
                                    {name : 'label',        type: 'input',      defaultValue : '',   label : 'Nom du rôle',          tooltipLabel : ''},
                                    {name : 'description',  type: 'input',      defaultValue : '',   label : 'Description du rôle',  tooltipLabel : ''},
                                ]
                    }}
                />
            }

            {stepMenu === 1 &&
                <GlobalForm
                    onChangeMenu={(val) => setStepMenu((stepMenu +2 + val)%2)}
                    data={{
                        path : '/attributions',
                        label: 'attributions',
                        state : attributionsState,
                        fields :[
                                    {name : 'label',        type: 'input',          defaultValue : '',      label : 'Nom du rôle',          tooltipLabel : ''},
                                    {name : 'description',  type: 'input',          defaultValue : '',      label : 'Description du rôle',  tooltipLabel : ''},
                                    {name : 'icon',         type: 'iconSelector',   defaultValue : null,    label : 'Nom de l\'icône',      tooltipLabel : ''},
                                ]
                        }}
                />
            }
        </>
    )
    
}

export default Configuration