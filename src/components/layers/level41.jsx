import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { PupPup, Yurple } from '../ui/colors'

const Blood = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${PupPup};
    box-shadow: 0px;
`

const Pulse = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Yurple};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_41">
            <ExpansionPanel>
                <Blood>
                    <Thiccboi> 41. Blood Orange - Angel’s Pulse Mixtape   </Thiccboi>
                </Blood>
                <Pulse className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/l3Fc7qU-G_0' />

                </Pulse>
            </ExpansionPanel>

        </div>
    )
}
