import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui 
import { Thiccboi, Slimboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { SailorJerry, Peaaches } from '../ui/colors'

const Solange = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${SailorJerry};
    height: 20px;
    box-shadow: 0px;
`

const Home = styled(Details)`
    display: block;
    background: ${Peaaches};
    height: 400px;
    text-align: left;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_3">
            <ExpansionPanel>
                <Solange >
                    <Thiccboi>3. Solange - When I Get Home</Thiccboi>
                </Solange>
                <Home className={classes.root}>

                    <Slimboi>
                        As anyone who is friends with me on Facebook knows, my most emotional moment of the year was in the middle of a crowd in Helsinki, Finland. 
                        It wasn’t my little brothers high school graduation, it wasn’t my tumultuous breakup, it wasn’t the end of Avengers Endgame. No, it was 
                        standing in front of a barricade at Flow Festival in Helsinki watching Solange bring Erykah Badu out for a surprise duet. I immediately 
                        felt myself on the brink of tears of joy, and then when I looked to my left to see Earl Sweatshirt standing 5 feet from me on the other 
                        side of the barricade with the exact same shock and awe reaction, I fucking lost it. I cried. While professional dancers twerked on stage.
                    </Slimboi>

                    <Slimboi>

                    </Slimboi>

                    <Slimboi>
                        
                    </Slimboi>

                </Home>
            </ExpansionPanel>

        </div>
    )
}
