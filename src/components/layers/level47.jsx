import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Perrywinkies, GrunTee } from '../ui/colors'

const Wand = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Perrywinkies};
    box-shadow: 0px;
`

const Matter = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_47">
            <ExpansionPanel>
                <Wand>
                    <Thiccboi> 47. Wand - Laughing Matter</Thiccboi>
                </Wand>
                <Matter className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/L0GWV8hIoH8' />

                </Matter>
            </ExpansionPanel>

        </div>
    )
}
