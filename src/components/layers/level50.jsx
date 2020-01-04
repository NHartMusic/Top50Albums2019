import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GrunTee, Peaaches } from '../ui/colors'

const Cherry = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GrunTee};
    box-shadow: 0px;
`

const Stuffed = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Peaaches};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_50">
            <ExpansionPanel>
                <Cherry>
                    <Thiccboi> 50. Cherry Glazer - Stuffed and Ready </Thiccboi>
                </Cherry>
                <Stuffed className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/YLZYJ-u3WMo' />

                </Stuffed>
            </ExpansionPanel>

        </div>
    )
}
