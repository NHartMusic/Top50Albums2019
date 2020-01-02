import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GrunTee, Wino } from '../ui/colors'

const Bamba = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GrunTee};
    height: 20px;
    box-shadow: 0px;
`

const Mujeres = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Wino};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_11">
            <ExpansionPanel>
                <Bamba>
                    <Thiccboi>11. Y La Bamba - Mujeres </Thiccboi>
                </Bamba>
                <Mujeres className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/au-mBoepJUA' />                    

                </Mujeres>
            </ExpansionPanel>

        </div>
    )
}
