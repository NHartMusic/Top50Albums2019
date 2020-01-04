import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod, GrunTee } from '../ui/colors'

const Giz = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    box-shadow: 0px;
`

const Fishies = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_34">
            <ExpansionPanel>
                <Giz>
                    <Thiccboi> 34. King Gizzard and the Lizard Wizard - Fishing for Fishies </Thiccboi>
                </Giz>
                <Fishies className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/-kE1S9olY6A' />

                </Fishies>
            </ExpansionPanel>

        </div>
    )
}
