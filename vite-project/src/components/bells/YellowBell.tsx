import { Box, useMediaQuery, useTheme } from "@mui/material"
import Lottie from "react-lottie"
import bellAlert from '../../assets/bell_yellow.json'

export const YellowBell = () => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'))
    const xlDown = useMediaQuery(theme.breakpoints.down('xl'))
    let Width
    let Height
    const smDownWidth = '93'
    const smDownHeight = '93'
    const mdDownWidth = '150'
    const mdDownHeight = '150'
    const lgDownWidth = '220'
    const lgDownHeight = '220'
    const xlDownWidth = '300'
    const xlDownHeight = '300'
    // const smDownWidth = 93
    // const smDownHeight = 93
    // const mdDownWidth = 120
    // const mdDownHeight = 120
    // const lgDownWidth = 150
    // const lgDownHeight = 150
    if (smDown) {
        Width = smDownWidth
        Height = smDownHeight
    }
    if (mdDown) {
        Width = mdDownWidth
        Height = mdDownHeight
    }
    if (lgDown) {
        Width = lgDownWidth
        Height = lgDownHeight
    }
    if (xlDown) {
        Width = xlDownWidth
        Height = xlDownHeight
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bellAlert,
    }
    return (
        <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Lottie
                options={defaultOptions}
                width={Width} height={Height}
                // width={150} height={150}
                

            />
        </Box >
    )
}

//'#1d221b'

// até 1200 = width={150} height={150}
// até 1200 = width={150} height={150}
// até 992 = width={93} height={93}

// width={150} height={150}