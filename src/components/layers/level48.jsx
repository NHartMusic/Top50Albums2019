import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, Cephalopod } from '../ui/colors'

const Girl = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    box-shadow: 0px;
`

const Talk = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_48">
            <ExpansionPanel>
                <Girl>
                    <Thiccboi> 48. Girl Band - The Talkies</Thiccboi>
                </Girl>
                <Talk className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/7RZrAwszmfY' />

                </Talk>
            </ExpansionPanel>

        </div>
    )
}
