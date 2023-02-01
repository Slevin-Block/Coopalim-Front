import styled from "@emotion/styled";
import { MultiSelect as MantineMultiSelect} from "@mantine/core";



export const MyMultiSelect = styled(MantineMultiSelect)`
    width : 100%;

    & .mantine-ittua2 {
        font : var(--label);
        font-weight: 900;
        padding-top : 0;
        margin-bottom : 0.4rem;
    }
`

export const Box = styled.div`
    display : flex;
    align-items : center;

    & > * {
        margin: 3px;
    }
`