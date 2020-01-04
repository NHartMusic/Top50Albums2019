import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GothGirlfriend, JailorSerry } from '../ui/colors'

const Dey = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GothGirlfriend};
    box-shadow: 0px;
`

const Sisters = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_33">
            <ExpansionPanel>
                <Dey>
                    <Thiccboi> 33. Katie Dey - Solipsisters </Thiccboi>
                </Dey>
                <Sisters className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/GKFd0fnQFcI' />

                </Sisters>
            </ExpansionPanel>

        </div>
    )
}
