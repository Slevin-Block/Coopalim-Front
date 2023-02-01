import styled from "@emotion/styled";
import { Modal } from "@mantine/core";

export const List = styled(Modal)`

    /* Mantine WRAPPER */
    & .mantine-rqmd87 {
        max-width : 1100px;
        height : 95%;
        padding : 10px;
        display : flex;
        flex-direction : column;
    }

    /* Mantine HEADER */
    & .mantine-Modal-header{
        position : relative;
        display : flex;
        justify-content : center;
        width : 100%;
        margin : 0
    }

    & .mantine-Modal-title{
        text-align : center;
        font : var(--title);
        font-size : 2.2rem;
        color : var(--secondary);
        width : 100%;
        font-weight :900;
        margin : 0;
    }

    & .mantine-Modal-close{
        position : absolute;
        top : 0;
        right : 0;
    
    }
`

export const BoxTitle = styled.div`
    
    margin-bottom : 2rem;

    & > * {
        margin : 0;
    }

`
export const BoxIndicator = styled.div`
    position : relative;

`

export const Card = styled.div`
    background-color : var(--onBackground);
    margin : 0.3rem 1rem 0.3rem 0;
    padding : 0.2rem;
    border-radius : 5px;
    display: grid; 
    grid-template-columns: 1fr 1fr 0.3fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "label label explorer"
        "startTime endTime delete"; 

    .label {
        margin : auto 0;
        padding-left : 1rem;
        grid-area: label;
    }
    .startTime {
        margin : auto auto;
        grid-area: startTime;
    }
    .endTime {
        margin : auto auto;
        grid-area: endTime;
    }
    .explorer {
        grid-area: explorer;
    }
    .delete {
        grid-area: delete;
    }
    .zone {
        grid-area: 1 / 1 / 3 / 3;
    }
    .control {
        grid-area: 1 / 3 / 3 / 4;
    }

`