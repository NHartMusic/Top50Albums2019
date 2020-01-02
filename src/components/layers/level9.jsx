import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod, GrunTee } from '../ui/colors'

const Lana = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 20px;
    box-shadow: 0px;
`

const Norman = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_9">
            <ExpansionPanel>
                <Lana>
                    <Thiccboi>9. Lana Del Rey - Norman Fucking Rockwell! </Thiccboi>
                </Lana>
                <Norman className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/soRjcajliHE' />

                </Norman>
            </ExpansionPanel>

        </div>
    )
}
