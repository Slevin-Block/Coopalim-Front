import styled from '@emotion/styled';
import { Button as MantineButton} from '@mantine/core';
import { getInCss } from '../../../global/functions/getInCss';

export const MyButton = styled(MantineButton)`
    min-width : 100%;
    background-color : ${props => props.color ? props.color : getInCss("--blueCoopalim")};

        &:hover  {
            background-color : ${props => props.color ? props.color : getInCss("--blueCoopalim")};
            filter: brightness(1.1);
        }
    margin : 0 ;
    padding : 0;
    
`

export const MyBox = styled.div`
    position : relative;
    display :flex;
    align-items : center;
    justify-content : center;
    width : 7rem;
    padding : 0;
    margin : 0;

    & * {
        margin : 0;
    }
`