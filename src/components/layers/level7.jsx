import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const Level = styled(ExpansionPanelDetails)`
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
                <ExpansionPanelSummary

                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="header">Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <Level>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </Level>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel disabled>
                <ExpansionPanelSummary

                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >

                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    )
}
