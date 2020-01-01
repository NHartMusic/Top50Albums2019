import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Reptile, Yurple } from '../ui/colors'

const Thief = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Reptile};
    height: 20px;
    box-shadow: 0px;
`

const Hands = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Yurple};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_28">
            <ExpansionPanel>
                <Thief>
                    <Thiccboi> 28. Big Thief - Two Hands </Thiccboi>
                </Thief>
                <Hands className={classes.root}>

                    

                </Hands>
            </ExpansionPanel>

        </div>
    )
}
