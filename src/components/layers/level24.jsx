import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod, SailorJerry } from '../ui/colors'

const Maxo = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 20px;
    box-shadow: 0px;
`

const Brandon = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${SailorJerry};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_24">
            <ExpansionPanel>
                <Maxo>
                    <Thiccboi>24. Maxo Kream - Brandon Banks </Thiccboi>
                </Maxo>
                <Brandon className={classes.root}>

                    

                </Brandon>
            </ExpansionPanel>

        </div>
    )
}
