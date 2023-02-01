import styled from "@emotion/styled";
import { Loader as MantineLoader } from '@mantine/core';

export const Global = styled.div`
    display : flex;
    flex-direction : column;
    flex-grow : 1;
    flex-basis : 0;
    flex-shrink : 1;
    width : 90%;
    height : 90%;

`

// WRAPPER TITLE AND CARDS CONTAINER
export const ListWrapper = styled.div`
    position : relative;
    display : flex;
    flex-direction : column;
    flex-grow : 1;
    height : 40%;    
`

// WRAPPER ONLY TITLE
export const BoxTitle = styled.div`
    display : flex;
    justify-content : space-between;
    flex-grow : 1;
`

// WRAPPER ONLY CARDS CONTAINER
export const List = styled.div`
    position : relative;
    height : 100%;
    display : flex;
    flex-grow : 1;
    flex-direction : column;
    margin : 1rem;
    overflow: auto;
`

//BOX

export const Box = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding-right : 0.4rem;

    .delete {
        position : relative;
        transition : 0.6s all;
        transform : translateX(${props => !props.selected ? `-30px` : `0px` });
        z-index : 0;
    }

`

// CARD
export const Card = styled.div`
    position : relative;
    z-index : 1;
    flex-grow : 1;
    margin : 0.2rem 0;
    padding : 0.4rem;

    background-color: var(--onBackground);
    border-radius: 1rem;
    border : solid 1px ${props => props.selected ? `var(--colorText)` : `var(--onBackground)`};

    display: grid; 
    grid-template-columns: 1fr 1fr 0.3fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px;
    grid-template-areas: 
        "label label icon"
        "description description description"; 

    .label {
        grid-area: label;
        margin : 0.2rem 0; 
    }
    .description {
        grid-area: description;
        padding : 0;
        
        margin : 0.2rem 0;
    }
    .icon {
        grid-area: icon;
        display : flex;
        height : 100%;
        align-items :center;
    }
`


// LOADER
export const LoaderWrapper = styled.div`
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`

export const Loader = styled(MantineLoader)`
`


export const Form = styled.form`

    border-top : 1px solid var(--yellowCoopalim);
    height : 60%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-content : stretch;
    .fields {
    
    }
    .control {
        display : flex;
        justify-content : space-evenly;
        margin-bottom : 1rem;
    }
`