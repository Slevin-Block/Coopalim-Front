import styled from "@emotion/styled";


export const Section = styled.section `
    position : relative;
    align-items : center;
    display :flex;
    height : 100%;
`


export const Form = styled.form `
    display : flex;
    flex-direction: column;
    width : 80vw;
    height : 100%;
    align-items: center;

    & > *:nth-of-type(-n+2) {
        margin : 1rem;
        width : 100%;
        max-width : 40rem;
    }
`
