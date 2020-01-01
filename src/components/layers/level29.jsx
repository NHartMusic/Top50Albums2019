import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, GothGirlfriend } from '../ui/colors'

const Blake = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 20px;
    box-shadow: 0px;
`

const Form = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_29">
            <ExpansionPanel>
                <Blake>
                    <Thiccboi> 29. James Blake - Assume Form </Thiccboi>
                </Blake>
                <Form className={classes.root}>

                    

                </Form>
            </ExpansionPanel>

        </div>
    )
}
