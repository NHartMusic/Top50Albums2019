import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Yurple, JailorSerry } from '../ui/colors'

const Battles = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Yurple};
    box-shadow: 0px;
`

const Juice = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_46">
            <ExpansionPanel>
                <Battles>
                    <Thiccboi> 46. Battles - Juice B Crypts</Thiccboi>
                </Battles>
                <Juice className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/cd9ulSsQ2-I' />

                </Juice>
            </ExpansionPanel>

        </div>
    )
}
