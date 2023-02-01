import { Dialog as MantineDialog} from '@mantine/core';
import styled from '@emotion/styled';


export const MyDialog = styled(MantineDialog)`
    position : absolute;
    display : grid;

    &.mantine-tsgikl{
        max-width : inherit;
    }    
`


export const Control = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-left : 1.2rem;
    
`
