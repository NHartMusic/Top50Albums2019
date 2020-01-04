import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { PupPup, SailorJerry } from '../ui/colors'

const Earth = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${PupPup};
    box-shadow: 0px;
`

const Mirror = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${SailorJerry};
    height: 320px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_8">
            <ExpansionPanel>
                <Earth>
                    <Thiccboi>8. EARTHGANG - Mirrorland </Thiccboi>
                </Earth>
                <Mirror className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/55CEliYIYNw' />

                </Mirror>
            </ExpansionPanel>

        </div>
    )
}
