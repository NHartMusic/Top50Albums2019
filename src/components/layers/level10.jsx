import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Reptile, Peaaches } from '../ui/colors'

const Kay = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Reptile};
    box-shadow: 0px;
`

const Bubba = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Peaaches};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_q0">
            <ExpansionPanel>
                <Kay>
                    <Thiccboi>10. Kaytranada - Bubba </Thiccboi>
                </Kay>
                <Bubba className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/sDvo7ruR35E' />

                </Bubba>
            </ExpansionPanel>

        </div>
    )
}
