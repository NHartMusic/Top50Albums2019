import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GrunTee, Cephalopod } from '../ui/colors'

const Rapsody = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GrunTee};
    height: 20px;
    box-shadow: 0px;
`

const Eve = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 400px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_38">
            <ExpansionPanel>
                <Rapsody>
                    <Thiccboi> 38. Rapsody - Eve </Thiccboi>
                </Rapsody>
                <Eve className={classes.root}>



                </Eve>
            </ExpansionPanel>

        </div>
    )
}
