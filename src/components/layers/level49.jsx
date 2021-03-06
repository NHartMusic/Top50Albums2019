import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { SailorJerry, GothGirlfriend } from '../ui/colors'

const Anderson = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${SailorJerry};
    box-shadow: 0px;
`

const Ventura = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_49">
            <ExpansionPanel>
                <Anderson>
                    <Thiccboi> 49. Anderson .Paak - Ventura</Thiccboi>
                </Anderson>
                <Ventura className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/hEdBe04dwms' />

                </Ventura>
            </ExpansionPanel>

        </div>
    )
}
