import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { PupPup, GrunTee } from '../ui/colors'

const Sir = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${PupPup};
    height: 20px;
    box-shadow: 0px;
`

const Summer = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_26">
            <ExpansionPanel>
                <Sir>
                    <Thiccboi> 26. SiR - Chasing Summer</Thiccboi>
                </Sir>
                <Summer className={classes.root}>

                    

                </Summer>
            </ExpansionPanel>

        </div>
    )
}
