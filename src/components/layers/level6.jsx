import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Peaaches, Cephalopod } from '../ui/colors'

const Howard = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Peaaches};
    box-shadow: 0px;
`

const Jaime = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_6">
            <ExpansionPanel>
                <Howard>
                    <Thiccboi>6. Brittany Howard - Jaime </Thiccboi>
                </Howard>
                <Jaime className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/eXJs5e2fvV0' />

                </Jaime>
            </ExpansionPanel>

        </div>
    )
}
