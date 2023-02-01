import styled from "@emotion/styled";
import { Link as RouterLink} from 'react-router-dom'

export const Section = styled.section`
    position: relative;
    display : flex;
    flex-direction: column;
    align-items : center;
    height : 100%;
    width : 80vw;


    /* List */
    & > div {
        ${props => (props.isDesktop) && ` 
            flex-direction: row;
        `}
        ${props => (props.isTablet || props.isMobile) && `
            flex-direction: column;
        `}
    }

    & > div > div {
        ${props => (props.isDesktop || props.isTablet) && ` 
            width : 20rem;
        `}
        ${props => (props.isMobile) && `
            width : 13rem;
        `}
    }

    

`

export const List = styled.div`
    display : flex;
    width : 100%;
    align-items : center;
    height : 100%;
    align-content : center;
    justify-content: space-evenly;
`

export const Group = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    flex-grow : 0;
    border-radius: 1rem 3rem 1rem;
    background-color: var(--onBackground);
    padding : 1.5rem;
`

export const Link = styled(RouterLink)`
    font : var(--text);
    color : var(--redCoopalim);
    text-decoration : none;
`