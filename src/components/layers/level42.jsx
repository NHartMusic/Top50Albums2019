import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GothGirlfriend, Peaaches } from '../ui/colors'

const Nasty = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GothGirlfriend};
    box-shadow: 0px;
`

const Anger = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Peaaches};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_41">
            <ExpansionPanel>
                <Nasty>
                    <Thiccboi> 42. Rico Nasty/Kenny Beats - Anger Management </Thiccboi>
                </Nasty>
                <Anger className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/1og6jfhUPxE' />

                </Anger>
            </ExpansionPanel>

        </div>
    )
}
