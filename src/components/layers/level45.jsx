import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Reptile, Wino } from '../ui/colors'

const Based = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Reptile};
    box-shadow: 0px;
`

const God = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Wino};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_45">
            <ExpansionPanel>
                <Based>
                    <Thiccboi> 45. Lil B 'The Basedgod' - The Hunchback of Basedgod</Thiccboi>
                </Based>
                <God className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/CwGQP-VFisc' />

                </God>
            </ExpansionPanel>

        </div>
    )
}
