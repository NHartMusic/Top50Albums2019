import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod, Reptile } from '../ui/colors'

const Lizzo = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 20px;
    box-shadow: 0px;
`

const Love = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_16">
            <ExpansionPanel>
                <Lizzo>
                    <Thiccboi>16. Lizzo - Cuz I Love You </Thiccboi>
                </Lizzo>
                <Love className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/Srq1FqFPwj0' />

                </Love>
            </ExpansionPanel>

        </div>
    )
}
