import styled from '@emotion/styled'

export const MyText = styled.p`

    font : var(--text);
    color : ${props => props.color};

    ${props => props.type === 'important' && `
        font-weight : 900;
    `}

    ${props => props.type === 'label' && `
        font : var(--label);
        font-weight: 900;
        margin-bottom : 0.4rem;
        line-height: 1.55;
    `}
    ${props => props.type === 'information' && `
        font : var(--information);
    `}

    ${props => props.type === 'infoBulle' && `
        font : var(--text);
        color : var(--text);
        text-align : center ;
        display: inline;
    `}

`