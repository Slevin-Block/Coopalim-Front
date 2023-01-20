import styled from "@emotion/styled";
import { NativeSelect as MantineNativeSelect} from '@mantine/core';

export const Global = styled.div`
    
    
`
export const Wrapper = styled.div`
    display : flex;
    padding: 5px 12px;
    align-items :center;
    border-radius: 4px;
    border: 1px solid #ced4da;

    &:focus-within  {
        border-color: #0092B4;
    }
`

export const NativeSelect = styled(MantineNativeSelect)`
    & .mantine-1nner0u {
        border-color: transparent;
    }
    & .mantine-149ccxv {
        border-color: transparent;
    }
`