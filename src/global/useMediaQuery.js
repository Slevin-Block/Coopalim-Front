import { useState } from 'react';
import {useMediaQuery as mediaQuery} from 'react-responsive'


export const useMediaQuery = () => {

    const [refMediaQuery, setRefMediaQuery] = useState({isDesktop: false, isTablet: false, isMobile: false})

    const isDesktop = mediaQuery({ minWidth: 1224 })
    const isTablet = mediaQuery({ minWidth: 768, maxWidth: 1224 })
    const isMobile = mediaQuery({ maxWidth: 767 })

    if (        refMediaQuery.isDesktop !== isDesktop
            ||  refMediaQuery.isTablet  !== isTablet
            ||  refMediaQuery.isMobile  !== isMobile   )
        {
            
                setRefMediaQuery({isDesktop, isTablet, isMobile})
            }

    return {isDesktop, isTablet, isMobile}
}