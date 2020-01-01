import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Wino, Perrywinkies } from '../ui/colors'

const Sharon = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Wino};
    height: 20px;
    box-shadow: 0px;
`

const Tomorrow = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Perrywinkies};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_27">
            <ExpansionPanel>
                <Sharon>
                    <Thiccboi> 27. Sharon Van Etten - Remind Me Tomorrow </Thiccboi>
                </Sharon>
                <Tomorrow className={classes.root}>

                    

                </Tomorrow>
            </ExpansionPanel>

        </div>
    )
}
