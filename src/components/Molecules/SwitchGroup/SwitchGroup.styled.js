import styled from "@emotion/styled";


export const Group = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top : 0;

    & > *{
        cursor: pointer;
    }
`

export const Info = styled.div`
    color : var(--blueCoopalim);
    border : 1px solid var(--blueCoopalim);
    border-radius: 0.3rem;
    width : 5em;
    margin : 0;
    padding : 0.2rem;
    text-align: center;

    & > p {
        font : var(--information);
        font-weight: 900;
        margin : 0;
    }

    ${props => props.selected && `
        color : var(--background);
        border : 1px solid var(--blueCoopalim);
        border-radius: 0.3rem;
        background-color: var(--blueCoopalim);
    `}
`

