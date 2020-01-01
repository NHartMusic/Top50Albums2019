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
    height: 20px;
    box-shadow: 0px;
`

const City = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 400px;
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



                </City>
            </ExpansionPanel>

        </div>
    )
}
