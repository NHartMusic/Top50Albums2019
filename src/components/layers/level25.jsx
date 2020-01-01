import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Peaaches, JailorSerry } from '../ui/colors'

const Billie = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Peaaches};
    height: 20px;
    box-shadow: 0px;
`

const Sleep = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_25">
            <ExpansionPanel>
                <Billie>
                    <Thiccboi> 25. Billie Eilish - When We Fall Asleep, Where Do We Go?  </Thiccboi>
                </Billie>
                <Sleep className={classes.root}>

                    

                </Sleep>
            </ExpansionPanel>

        </div>
    )
}
