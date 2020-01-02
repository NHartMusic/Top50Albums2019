import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Peaaches, GrunTee } from '../ui/colors'

const Vampire = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Peaaches};
    height: 20px;
    box-shadow: 0px;
`

const Bride = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_15">
            <ExpansionPanel>
                <Vampire>
                    <Thiccboi>15. Vampire Weekend - Father of the Bride </Thiccboi>
                </Vampire>
                <Bride className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/P2L0d4uUp24' />

                </Bride>
            </ExpansionPanel>

        </div>
    )
}
