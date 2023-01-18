import styled from '@emotion/styled'
import { getInCss } from '../../../global/functions/getInCss'


    /* font : ${getInCss('--text')}; */
export const MyText = styled.p`

    font : ${getInCss('--text')};
    color : ${props => props.color};

    ${props => props.type === 'important' && `
        font-weight : 900
    `}

    ${props => props.type === 'label' && `
        font : ${getInCss('--label')};
        font-weight: bold;
        margin-bottom : 0.4rem;
    `}

    ${props => props.type === 'infoBulle' && `
        font : ${getInCss('--text')};
        color : var(--text);
        text-align : center ;
        display: inline;
    `}

`