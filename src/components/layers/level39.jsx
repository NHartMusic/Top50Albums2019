import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Wino, PupPup } from '../ui/colors'

const Pup = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Wino};
    box-shadow: 0px;
`

const Morbid = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${PupPup};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_39">
            <ExpansionPanel>
                <Pup>
                    <Thiccboi> 39. PUP - Morbid Stuff  </Thiccboi>
                </Pup>
                <Morbid className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/AS7SkDA4z1Q' />

                </Morbid>
            </ExpansionPanel>

        </div>
    )
}
