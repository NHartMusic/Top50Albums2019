import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'



const StyledAppbar = styled(AppBar)`
     background: linear-gradient(55deg, #7CF0BD 30%,  #2A4D14 90%);
     text-align: center;
     margin: auto;
     @media (max-width: 740px) {
        background: linear-gradient(50deg, #FCD0A1 30%,  #63535B 90%);
     }
`




export default props =>
    <StyledAppbar position='static'>
        <Toolbar>
            <Typography
                variant='headline'
                color='inherit'
                align='center'
            >
                N I C K
            </Typography>
        </Toolbar>
    </StyledAppbar>