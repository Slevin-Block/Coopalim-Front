import { createStyles } from '@mantine/core';
import { getInCss } from '../../../functions/getInCss';

export const useStyles = createStyles(() => ({
    
   
    label : {
        paddingBottom : '0.3rem',
        font : getInCss("--labelField"),
        fontWeight : 'bold',
    },

    input :{
        borderColor : getInCss("--blueCoopalim"),
    }
}));