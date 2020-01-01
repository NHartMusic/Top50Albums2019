import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { SailorJerry, Cephalopod } from '../ui/colors'

const Brown = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${SailorJerry};
    height: 20px;
    box-shadow: 0px;
`

const Know = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_31">
            <ExpansionPanel>
                <Brown>
                    <Thiccboi> 31. Danny Brown - uknowwhatimsayin? </Thiccboi>
                </Brown>
                <Know className={classes.root}>

                    

                </Know>
            </ExpansionPanel>

        </div>
    )
}
