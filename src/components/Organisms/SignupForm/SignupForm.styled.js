import styled from "@emotion/styled";


export const Form = styled.form`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Section = styled.div`
    width : 100%;
    display: flex;
    justify-content : space-evenly;

    & > div {
        ${props => (!props.isMobile) && `
            flex-grow : 1;
            max-width : 20vw;
        `}
    }

`
export const SubSection = styled.div`
    & > * {
        margin-top : 1rem;
    }

    & > h2 {
        margin : 0;
    }
`


export const Footer = styled.footer`
    display: flex;
    margin-bottom: 1rem;
    width : 100vw;
    justify-content: space-evenly;
    & > button{
        width : 7rem;
        margin : 0 1rem;
    }
`