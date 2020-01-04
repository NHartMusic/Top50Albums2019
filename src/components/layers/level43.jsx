import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod, GrunTee } from '../ui/colors'

const Ty = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    box-shadow: 0px;
`

const Taste = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_43">
            <ExpansionPanel>
                <Ty>
                    <Thiccboi> 43. Ty Segall - First Taste  </Thiccboi>
                </Ty>
                <Taste className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/mEdZoBlno2U' />

                </Taste>
            </ExpansionPanel>

        </div>
    )
}
