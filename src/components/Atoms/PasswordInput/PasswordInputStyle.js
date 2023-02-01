import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
    
    'root' : {
        color : `var(--redCoopalim)`,
    },
    
    label : {
        paddingBottom : '0.3rem',
        font : `var(--label)`,
        fontWeight : 'bold',
    },

    input :{
        borderColor : '#ced4da',
        '&:focus': {
            backgroundColor: `var(--blueCoopalim)`,
        },
    }

}));