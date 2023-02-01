import styled from "@emotion/styled";
import { Select as MantineSelect} from "@mantine/core";


export const MySelect = styled(MantineSelect)`
    & .mantine-ittua2 {
        font : var(--label);
        font-weight: 900;
        padding-top : 0;
        margin-bottom : 0.4rem;
    }


`
export const Box = styled.div`
    display: grid; 
    grid-template-columns: 1fr 0.3fr; 
    grid-template-rows: 1fr 0.8fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "label label"
        "input icon"; 

    .label {
        grid-area: label;
    }
    .input {
        grid-area: input;
    }
    .icon {
        grid-area: icon;
        margin : auto;
    }


`