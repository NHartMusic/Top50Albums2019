import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Peaaches, Perrywinkies } from '../ui/colors'

const Mutha = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Peaaches};
    box-shadow: 0px;
`

const Fuckin = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Perrywinkies};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_44">
            <ExpansionPanel>
                <Mutha>
                    <Thiccboi> 44. Mr. Muthafuckin’ eXquire - Mr. Muthafuckin’ eXquire</Thiccboi>
                </Mutha>
                <Fuckin className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/AXyewAkVhus' />

                </Fuckin>
            </ExpansionPanel>

        </div>
    )
}
