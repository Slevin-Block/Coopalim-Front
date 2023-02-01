import styled from "@emotion/styled";

export const Box = styled.div`
    
    display: flex;
    width : ${props => props.small ? 28 : 37}px;
    height: ${props => props.small ? 28 : 37}px;
    border : 1px solid var(--blueCoopalim);    
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    ${props => props.disabled && `
        background-color : #f6f7f8;
        border : 1px solid  #f6f7f8;    
    
    `}

    ${props => props.toggle && `background-color: var(--blueCoopalim);`}

    ${props => !props.disabled && `
        &:hover{
            filter: brightness(1.1);
        }
    `}

`