import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Yurple, PupPup } from '../ui/colors'

const Clairo = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Yurple};
    box-shadow: 0px;
`

const Immunity = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${PupPup};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_32">
            <ExpansionPanel>
                <Clairo>
                    <Thiccboi> 32. Clairo - Immunity </Thiccboi>
                </Clairo>
                <Immunity className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/7zFJZtwY4tM' />

                </Immunity>
            </ExpansionPanel>

        </div>
    )
}
