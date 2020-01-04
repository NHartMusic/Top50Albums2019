import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Perrywinkies, GothGirlfriend } from '../ui/colors'

const Slow = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Perrywinkies};
    box-shadow: 0px;
`

const Great = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_21">
            <ExpansionPanel>
                <Slow>
                    <Thiccboi>21. Slowthai - Nothing Great About Brittain </Thiccboi>
                </Slow>
                <Great className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/ICBkHaMOPXs' />

                </Great>
            </ExpansionPanel>

        </div>
    )
}
