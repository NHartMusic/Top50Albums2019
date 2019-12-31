import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { PupPup, SailorJerry } from '../ui/colors'

const Simz = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${PupPup};
    height: 20px;
    box-shadow: 0px;
`

const Grey = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${SailorJerry};
    height: 400px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_13">
            <ExpansionPanel>
                <Simz>
                    <Thiccboi>13. Little Simz - Grey Area </Thiccboi>
                </Simz>
                <Grey className={classes.root}>

                    

                </Grey>
            </ExpansionPanel>

        </div>
    )
}
