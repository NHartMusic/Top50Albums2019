import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi, Link } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GothGirlfriend } from '../ui/colors'

const Honorable = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 20px;
    box-shadow: 0px;
`

const Mentions = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 400px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_1000">
            <ExpansionPanel>
                <Honorable>
                    <Thiccboi>Honorable Mentions/Most Disappointing</Thiccboi>
                </Honorable>
                <Mentions className={classes.root}>

                    <Slimboi>
                        Here are some honorable mentions that were very good and fun and exciting and nice albums but didn't quite
                        make my top 50. These are in no particular order.
                    </Slimboi>

                    <Slimboi>
                        <ul>
                            <li>Aesop Rock/Tobacco - Malibu Ken</li>
                            <li>Kiefer - Superbloom</li>
                            <li>Mark Ronson/Various Artists - Late Night Feelings</li>
                            <li>Deerhunter - Why Hasn’t Everything Already Disappeared?</li>
                            <li>Whitney - Forever Turned Around</li>
                            <li>Ezra Furman - Songs by Others</li>
                            <li>Doja Cat - Hot Pink</li>
                            <li>E-40 - Practice Makes Paper</li>
                            <li>Young Thug - So Much Fun</li>
                            <li>Wilco - Ode to Joy</li>
                            <li>Slauson Malone - A Quiet Farewell, Twenty Sixteen to Twenty Eighteen</li>
                            <li>Alex Cameron - Miami Memory</li>
                            <li>Oh Sees - Face Stabber></li>
                            <li>Wiki - Oofie</li>
                        </ul>
                    </Slimboi>

                    <Slimboi>
                        Here are the most disappointing albums I heard. These aren't the worst albums of the year,
                        just the only ones I listened to that I was really let down by.
                    </Slimboi>

                    <Slimboi>
                        <ul>
                            <li>Chance The Rapper - The Big Day</li>
                            <li>Flying Lotus - Flamagra</li>
                            <li>The Black Keys - Let’s Rock!</li>
                        </ul>
                    </Slimboi>

                </Mentions>
            </ExpansionPanel>

        </div>
    )
}
