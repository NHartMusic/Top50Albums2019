import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Thiccboi } from '../ui/typography'
import styled from 'styled-components'
import { JailorSerry, GothGirlfriend } from '../ui/colors'

const Album = styled(ExpansionPanelSummary)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 20px;
    box-shadow: 0px;
`

const Details = styled(ExpansionPanelDetails)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 100px;
`

export default function SimpleExpansionPanel() {
    return (
        <div className="level_10">
            <ExpansionPanel>
                <Album>
                    <Thiccboi>10. Kaytranada - Bubba </Thiccboi>
                </Album>
                <Details>

                </Details>
            </ExpansionPanel>

        </div>
    )
}
