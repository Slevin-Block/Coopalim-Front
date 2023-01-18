import styled from "@emotion/styled";
import { getInCss } from "../../../global/functions/getInCss";


export const Box = styled.div`
    
    display: flex;
    width : ${props => props.small ? 28 : 37}px;
    height: ${props => props.small ? 28 : 37}px;
    border : 1px solid ${getInCss('--blueCoopalim')};    
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    ${props => props.toggle && `background-color: ${getInCss('--blueCoopalim')};`}

    ${props => !props.disabled && `
        &:hover{
            filter: brightness(1.1);
        }
    `}

`