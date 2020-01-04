import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, GrunTee } from '../ui/colors'

const Thief = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    box-shadow: 0px;
`

const Ufof = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_20">
            <ExpansionPanel>
                <Thief>
                    <Thiccboi>20. Big Thief - UFOF </Thiccboi>
                </Thief>
                <Ufof className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/x6ykXocDhUY' />

                </Ufof>
            </ExpansionPanel>

        </div>
    )
}
