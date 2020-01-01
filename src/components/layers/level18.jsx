import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { PupPup, Reptile } from '../ui/colors'

const Thom = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${PupPup};
    height: 20px;
    box-shadow: 0px;
`

const Anima = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_18">
            <ExpansionPanel>
                <Thom>
                    <Thiccboi>18. Thom Yorke - Anima </Thiccboi>
                </Thom>
                <Anima className={classes.root}>

                    

                </Anima>
            </ExpansionPanel>

        </div>
    )
}
