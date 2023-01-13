
import { createStyles } from '@mantine/core';
import { getInCss } from '../../../global/functions/getInCss';

export const useStyles = createStyles(() => ({
    button :{
        backgroundColor : getInCss("--blueCoopalim"),
        
        '&:hover' : {
            backgroundColor : getInCss("--blueCoopalim"),
            filter: 'brightness(1.1)',
        
        }
    }

}));