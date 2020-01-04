import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Perrywinkies, GothGirlfriend } from '../ui/colors'

const Toro = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Perrywinkies};
    box-shadow: 0px;
`

const Peace = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_37">
            <ExpansionPanel>
                <Toro>
                    <Thiccboi> 37. Toro Y Moi - Outer Peace  </Thiccboi>
                </Toro>
                <Peace className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/73Ppa6vQedk' />

                </Peace>
            </ExpansionPanel>

        </div>
    )
}
