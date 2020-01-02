import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, Cephalopod } from '../ui/colors'

const Denzel = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 20px;
    box-shadow: 0px;
`

const Zuu = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_12">
            <ExpansionPanel>
                <Denzel>
                    <Thiccboi>12. Denzel Curry - ZUU </Thiccboi>
                </Denzel>
                <Zuu className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/GWenb9Noq_A' />

                </Zuu>
            </ExpansionPanel>

        </div>
    )
}
