import { createStyles } from '@mantine/core';
import { getInCss } from '../../../global/functions/getInCss';

export const useStyles = createStyles(() => ({
    outside: {
        opacity: 0.5,
    },
    day: {
        borderRadius: 0, height: 70, font: getInCss("--text"),
        '&[data-selected]': {
              backgroundColor: getInCss("--secondary"),
              borderRadius: '0.5rem',
              position: 'relative',
            },   
    },


    weekend: {
        color: getInCss("--redCoopalim"),
    },
    
    cell: {
        height: 75,
        /* backgroundColor: 'blue', */
        '& > *' : {
            border : '1px solid black',
            /* margin : 3, */
        }
    },
    
}));