import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Thiccboi, Slimboi } from '../ui/typography'
import styled from 'styled-components'
import { Cephalopod, GrunTee } from '../ui/colors'

const Album = styled(ExpansionPanelSummary)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 20px;
    box-shadow: 0px;
`

const Details = styled(ExpansionPanelDetails)`
    display: block;
    background: ${GrunTee};
    height: 500px;
    text-align: left;
`

const Vid = styled.iframe`
    margin: 0 auto;
    display: block;
`

export default function SimpleExpansionPanel() {
    return (
        <div className="level_9">
            <ExpansionPanel>
                <Album>
                    <Thiccboi>9. Lana Del Rey - Norman Fucking Rockwell!</Thiccboi>
                </Album>
                <Details>

                   
                </Details>
            </ExpansionPanel>

        </div>
    )
}
