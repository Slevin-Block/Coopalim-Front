import React from 'react'
import { LoadingOverlay } from '@mantine/core';

const Loader = ({visible}) => {
    return (
        <div>
            <LoadingOverlay visible={visible} overlayBlur={2} />
        </div>
    )
}

export default Loader
