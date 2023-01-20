import styled from "@emotion/styled";
import { Center, createStyles } from '@mantine/core';
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




export const Error = styled.p`
    font : var(--error);
    font-weight: bold;
    color: var(--redError);
    margin : 0;
`