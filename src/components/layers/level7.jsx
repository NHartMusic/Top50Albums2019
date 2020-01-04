import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Perrywinkies, GrunTee } from '../ui/colors'

const Iver = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Perrywinkies};
    box-shadow: 0px;
`

const I = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GrunTee};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_7">
            <ExpansionPanel>
                <Iver>
                    <Thiccboi>7. Bon Iver - i,i </Thiccboi>
                </Iver>
                <I className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/wU-s_Zxv_MQ' />

                </I>
            </ExpansionPanel>

        </div>
    )
}
