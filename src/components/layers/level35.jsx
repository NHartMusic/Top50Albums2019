import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Peaaches, Wino } from '../ui/colors'

const French = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Peaaches};
    height: 20px;
    box-shadow: 0px;
`

const Myself = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Wino};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_35">
            <ExpansionPanel>
                <French>
                    <Thiccboi> 35. French Vanilla - How Am I Not Myself? </Thiccboi>
                </French>
                <Myself className={classes.root}>

                    

                </Myself>
            </ExpansionPanel>

        </div>
    )
}
