import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GrunTee, Peaaches } from '../ui/colors'

const Esme = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GrunTee};
    box-shadow: 0px;
`

const Nudes = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Peaaches};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_30">
            <ExpansionPanel>
                <Esme>
                    <Thiccboi> 30. Ezra Furman - Twelve Nudes </Thiccboi>
                </Esme>
                <Nudes className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/MSF6IIMRkEA' />

                </Nudes>
            </ExpansionPanel>

        </div>
    )
}
