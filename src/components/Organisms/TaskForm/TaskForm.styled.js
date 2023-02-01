import styled from "@emotion/styled";
import { Modal } from "@mantine/core";



export const MyModal = styled(Modal)`

    /* Mantine GLOBAL */
    & .mantine-16pg774 {
        padding : 0;
    }

    /* Mantine WRAPPER */
    & .mantine-rqmd87 {
        width : min(900px, 95%);
        height : min(600px, 95%);
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

    & .mantine-Modal-close{
        position : absolute;
        top : 0;
        right : 0;
    
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
    
    /* FORM WRAPPER */
    & .mantine-20iurd {
        display : flex;
        max-height : 100%;
        max-width : 100%;
        flex-grow : 1;
        padding-right : 0.7rem;
    }
`


export const MyForm = styled.form`
    display: grid; 
    width : 100%;
    padding-right : 0.7rem;
    ${props => (props.isMobile) && `
        grid-template-columns: repeate(6, 1fr); 
        grid-template-rows: repeate(7,1fr); 
    `}

    ${props => (props.isDesktop || props.isTablet) && `
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1.5fr 1fr 1fr; 
    `}


    gap: 0px 1rem; 
    margin-bottom : 2.8rem;
    overflow : scroll;

    ${props => (props.isMobile) && `
        grid-template-areas:
            "label label label label label label"
            "description description description description description description"
            "participators participators participators participators participators participators"
            "day day day nbParticipators nbParticipators nbParticipators"
            "startTime startTime startTime nbAutonome nbAutonome nbAutonome"
            "endTime endTime endTime nbNovice nbNovice nbNovice"
            "neededAttributions neededAttributions neededAttributions isUrgent isUrgent isUrgent";
    `}

    ${props => (props.isDesktop || props.isTablet) && `
        grid-template-areas:
            "label label label label"
            "description description description description"
            "participators participators participators participators"
            "day startTime endTime neededAttributions"
            "nbParticipators nbAutonome nbNovice isUrgent";
    `}


    & .label { grid-area: label; }
    & .description { grid-area: description; }
    & .template { grid-area: template; }
    & .participators { grid-area: participators; }
    & .day { grid-area: day; }
    & .startTime { grid-area: startTime; }
    & .endTime { grid-area: endTime; }
    & .neededAttributions { grid-area: neededAttributions; }
    & .isUrgent { grid-area: isUrgent; }
    & .nbParticipators { grid-area: nbParticipators; }
    & .nbNovice { grid-area: nbNovice; }
    & .nbAutonome { grid-area: nbAutonome; }

    & > div > p, &  > div > div > p {
        margin-top : 0;
    }

    & .control {
        position : fixed;
        width : 95%;
        display : flex;
        justify-content : space-evenly;
        align-items : center;
        bottom : 0.5rem;
    }   

`