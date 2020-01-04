import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { SailorJerry, Peaaches } from '../ui/colors'

const Brock = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${SailorJerry};
    box-shadow: 0px;
`

const Ginger = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Peaaches};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_19">
            <ExpansionPanel>
                <Brock>
                    <Thiccboi>19. BROCKHAMPTON - GINGER </Thiccboi>
                </Brock>
                <Ginger className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/hQoN8Daltfc' />

                </Ginger>
            </ExpansionPanel>

        </div>
    )
}
