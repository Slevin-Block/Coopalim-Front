import styled from '@emotion/styled';
import { Button as MantineButton} from '@mantine/core';

export const MyButton = styled(MantineButton)`
    min-width : 100%;
    background-color : ${props => props.color ? props.color : `var(--blueCoopalim)`};

        &:hover  {
            background-color : ${props => props.color ? props.color : `var(--blueCoopalim)`};
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
    ${props => !props.small && `width : 6.3rem;`}
    padding : 0;
    margin : 0;

    & * {
        margin : 0;
    }
`