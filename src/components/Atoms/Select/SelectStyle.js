import { createStyles } from '@mantine/core';
import { getInCss } from '../../../global/functions/getInCss';

export const useStyles = createStyles(() => ({
    
   
    label : {
        paddingBottom : '0.3rem',
        font : getInCss("--label"),
        fontWeight : 'bold',
    },

    input :{
        borderColor : getInCss("--blueCoopalim"),
    }
}));