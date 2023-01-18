import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appear = keyframes`
    0%    {      
                opacity : 0;
                transform : translate(-50%, -3rem);
            }
    25%   {      
                opacity : 0.9;
                transform : translate(-50%, 0);
            }
    75%   {      
                opacity : 0.9;
                transform : translate(-50%, 0);
            }
    to   {      
                opacity : 0.9;
                transform : translate(-50%, -3rem);
            }
`

export const MyInfoBulle = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 10;
    background-color : var(--primary) ;
    padding: 1rem;
    border-radius: 0.4rem 1.2rem 0.4rem;
    animation : 3s ${appear} forwards;
    line-height: 100%;
`