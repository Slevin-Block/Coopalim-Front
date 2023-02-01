import styled from "@emotion/styled";
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
    
    input :{

        border: '1px solid #ced4da',

        '&:focus' : {
            borderColor : `var(--blueCoopalim)`,
        },
    },

    label : {
        paddingBottom : '0.3rem',
        font : `var(--label)`,
        fontWeight : 'bold',
    },

    
}));




export const Error = styled.p`
    font : var(--error);
    font-weight: bold;
    color: var(--redError);
    margin : 0;
`