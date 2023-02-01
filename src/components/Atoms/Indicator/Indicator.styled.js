import styled from "@emotion/styled";

export const P = styled.p`
    color : var(--onBackground);
    font-family : var(--basic);
    font-size: 0.8rem;
`


export const MyIndicator = styled.div`
    position :absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    width : ${props => props?.width}px;
    height : ${props => props?.height}px;
    background-color: ${props => props?.color};
    border-radius: 0.5rem;


    ${props => (props?.position === 'tr' ||
               props?.position === undefined) && `
        top : ${props?.offset}px;
        right : ${props?.offset}px;
    `}
    ${props => props?.position === 'tl' && `
        top : ${props?.offset}px;
        left : ${props?.offset}px;
    `}
    ${props => props?.position === 'br' && `
        bottom : ${props?.offset}px;
        right : ${props?.offset}px;
    `}
    ${props => props?.position === 'bl' && `
        bottom : ${props?.offset}px;
        left : ${props?.offset}px;
    `}
    ${props => props?.position === 'bc' && `
        bottom : ${props?.offset}px;
        left : calc(50% - ( ${props?.size}px / 2 ));
    `}
    ${props => props?.position === 'tc' && `
        top : ${props?.offset}px;
        left : calc(50% - ( ${props?.size}px / 2 ));
    `}
    ${props => props?.position === 'ml' && `
        top : calc(50% - ( ${props?.size}px / 2 ));
        left : ${props?.offset}px;
    `}
    ${props => props?.position === 'mr' && `
        top : calc(50% - ( ${props?.size}px / 2 ));
        right : ${props?.offset}px;
    `}
    ${props => props?.position === 'TR' && `
        top : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
        right : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
    `}
    ${props => props?.position === 'TL' && `
        top : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
        left : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
    `}
    ${props => props?.position === 'BR' && `
        bottom : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
        right : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
    `}
    ${props => props?.position === 'BL' && `
        bottom : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
        left : calc( 0% + ${props?.offset}% - (${props?.size}px / 2));
    `}

`