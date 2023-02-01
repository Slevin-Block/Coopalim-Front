import styled from "@emotion/styled";


export const Wrapper = styled.div`
    background-color: var(--onBackground);
    border-radius: 1rem;
    width : 100%;
    margin : 0.5rem 0;
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.7fr 1fr 1fr 0.5fr 0.7fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
    "pseudo pseudo name name Rule Rule Edit"
    "Attributions Attributions Attributions IsAutonomous IsAutonomous IsAutonomous Delete";

    & > div{
        padding : 0;
        margin : 0;
        display : flex;
        justify-content: center;
        align-items: center;
        font-style : var(--information);
        min-height : 50px;
    }

    & .pseudo {
        justify-content: flex-start;
        margin-left : 1rem;
    }

    & .rule {
        justify-content: flex-end;
        margin-right : 0.5rem;
    }
`

export const Pseudo = styled.div `
    grid-area: pseudo;
    font : var(--text);
    font-size : 1.2rem;
    font-weight: bold;
`

export const Name = styled.div `
    grid-area: name;
    font : var(--information);
    text-align : center;
`

export const Rule = styled.div `
    grid-area: Rule;
    font : var(--information);
`

export const Attributions = styled.div `
    grid-area: Attributions;
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`

export const IsAutonomous = styled.div`
    grid-area: IsAutonomous;
    & > div{
        display : flex;
        align-items: center;
    }
`

export const Edit = styled.div`
    grid-area: Edit;
    border-bottom: 1px solid var(--colorText);
    border-left: 1px solid var(--colorText);
    border-top-right-radius: 1rem;
    &:hover{
        filter: brightness(1.2);
        background-color: var(--background)
    }
`
export const Delete = styled.div`
    grid-area: Delete;
    border-left: 1px solid var(--colorText);
    border-bottom-right-radius: 1rem;
    &:hover{
        filter: brightness(1.2);
        background-color: var(--background)
    }
`