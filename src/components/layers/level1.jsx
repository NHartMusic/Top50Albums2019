import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Thiccboi } from '../ui/typography'
import styled from 'styled-components'
import { Yurple, Perrywinkies } from '../ui/colors'

const Album = styled(ExpansionPanelSummary)`
    display: flex;
    margin: 0 auto;
    background: ${Yurple};
    height: 20px;
    box-shadow: 0px;
`

const Details = styled(ExpansionPanelDetails)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Perrywinkies};
    height: 500px;
`

const Vid = styled.iframe`
    margin: 0 auto;
`

export default function SimpleExpansionPanel() {
    return (
        <div className="level_1">
            <ExpansionPanel>
                <Album>
                    <Thiccboi>1. Angel Olsen - All Mirrors</Thiccboi>
                </Album>
                <Details>

                <Vid width="560" height="315" src="https://www.youtube.com/embed/dyDVUA-t5xU" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></Vid>

                </Details>
            </ExpansionPanel>

        </div>
    )
}
