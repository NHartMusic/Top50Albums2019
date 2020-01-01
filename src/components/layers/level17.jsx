import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Wino, Perrywinkies } from '../ui/colors'

const Lacy = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Wino};
    height: 20px;
    box-shadow: 0px;
`

const Apollo = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Perrywinkies};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_17">
            <ExpansionPanel>
                <Lacy>
                    <Thiccboi>17. Steve Lacy - Apollo XXI </Thiccboi>
                </Lacy>
                <Apollo className={classes.root}>

                    

                </Apollo>
            </ExpansionPanel>

        </div>
    )
}
