import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GothGirlfriend, Reptile } from '../ui/colors'

const Jpeg = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GothGirlfriend};
    box-shadow: 0px;
`

const Corn = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_23">
            <ExpansionPanel>
                <Jpeg>
                    <Thiccboi>23. JPEGMAFIA - All My Heroes Are Cornballs </Thiccboi>
                </Jpeg>
                <Corn className={classes.root}>

                    <Vid src='https://www.youtube.com/embed/7Hs-PcBiRhA' />

                </Corn>
            </ExpansionPanel>

        </div>
    )
}
