import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Thiccboi } from '../ui/typography'
import styled from 'styled-components'

const Album = styled(ExpansionPanelSummary)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: linear-gradient(90deg, #E89005 40%, #F42B03 60%);
    height: 100px;
    box-shadow: 0px;
`

const Details = styled(ExpansionPanelDetails)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: linear-gradient(90deg, #99B2DD 40%, #F9DEC9 60%);
    height: 100px;
`

export default function SimpleExpansionPanel() {
    return (
        <div className="div">
            <ExpansionPanel>
                <Album>
                    <Thiccboi>Expansion Panel 1</Thiccboi>
                </Album>
                <Details>

                </Details>
            </ExpansionPanel>

        </div>
    )
}
