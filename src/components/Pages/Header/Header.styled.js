import styled from "@emotion/styled";

import { Link as DomLink } from 'react-router-dom'

export const Nav = styled.nav`
    position : relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--background);
    border-bottom: 3px solid var(--yellowCoopalim) ;
    justify-content: space-evenly;


    ${props => (props.isDesktop || props.isTablet) && `
        & > img {
            position : absolute;
            top : 0;
            left : 0;
            margin-left : 3rem;
        }
    `}
    ${props => (props.isDesktop) && `
        justify-content: center;
        gap: 2rem;
    `}
    ${props => (props.isTablet) && `
        justify-content: center;
        gap: 5rem;
    `}



    & > div {
        display : flex;
        flex-direction : row;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    & > div:hover {
        border-block: 3px solid var(--redCoopalim);
        border-top-style : 0;
    }

    & > img {
        height : 90%;
        width : auto;
    }

`

export const Link = styled(DomLink)`
    font : var(--text);
    color : var(--redCoopalim);
    text-decoration : none;
    text-align: center;
    line-height: 100%;
    height : 100%;
    padding-top : 0;
    display : flex;
    justify-content: center;
    align-items: center;

    & > div {
        display : flex;
        align-items : center;

        & > p {
            padding : 0.2rem 0 0 0.4rem;
            margin : 0;
        }
    }

`

export const MediaQuery = styled.p`
    position : absolute;
    top : 0;
    right : 0;
    margin : 1.5rem 1.5rem 0 0;
    color : darkkhaki;
`