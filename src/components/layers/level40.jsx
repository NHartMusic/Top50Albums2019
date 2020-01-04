import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, Reptile } from '../ui/colors'

const Benny = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    box-shadow: 0px;
`

const City = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_40">
            <ExpansionPanel>
                <Benny>
                    <Thiccboi> 40. Benny Sings - City Pop  </Thiccboi>
                </Benny>
                <City className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/tm6x0q2INSs' />

                </City>
            </ExpansionPanel>

        </div>
    )
}
