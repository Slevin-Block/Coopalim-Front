import styled from "@emotion/styled";
import { ScrollArea } from '@mantine/core';


export const Section = styled.section`
    position : relative;
    display : flex;
    flex-direction: column;
    justify-content: center;
    max-height : 100%;
    width : 100vw;
    flex-grow: 1;
`

export const Wrapper = styled(ScrollArea)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width : 100%;
    max-height: 100%;
    & > div{
        ${props => (props.isDesktop) && `
            max-width : 45rem;
        `}
        ${props => (props.isTablet) && `
            max-width : 35rem;
        `}
        ${props => (props.isMobile) && `
            width  : 95%;
        `}
        
    }

    & > div > div{
        max-width : 100%;
    }
`
