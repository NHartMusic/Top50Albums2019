import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Yurple, GothGirlfriend } from '../ui/colors'

const Twigs = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Yurple};
    height: 20px;
    box-shadow: 0px;
`

const Magdalene = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 400px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_14">
            <ExpansionPanel>
                <Twigs>
                    <Thiccboi>14. FKA Twigs - Magdalene </Thiccboi>
                </Twigs>
                <Magdalene className={classes.root}>

                    

                </Magdalene>
            </ExpansionPanel>

        </div>
    )
}
