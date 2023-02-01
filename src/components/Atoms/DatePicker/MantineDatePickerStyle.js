import styled from "@emotion/styled";
import { DatePicker as MantineDatePicker} from '@mantine/dates';

export const MyDatePicker = styled(MantineDatePicker)`
    & .mantine-ittua2 {
        font : var(--label);
        font-weight: 900;
        padding-top : 0;
        margin-bottom : 0.4rem;
    }

    & .mantine-1m3pqry {
        line-height : 0;
    }

`


export const Error = styled.p`
    font : var(--error);
    font-weight: bold;
    color: var(--redError);
    margin : 0;
`