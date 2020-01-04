import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui 
import { Thiccboi, Slimboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { SailorJerry, Cephalopod } from '../ui/colors'

const Solange = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${SailorJerry};
    box-shadow: 0px;
`

const Home = styled(Details)`
    display: block;
    background: ${Cephalopod};
    height: 550px;
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
                        It wasn’t my little brothers high school graduation (sorry George), it wasn’t going through a breakup, it wasn’t the end of Avengers Endgame. No, it was
                        standing in front of a barricade at Flow Festival in Helsinki watching Solange bring Erykah Badu out for a surprise duet. I immediately
                        felt myself on the brink of tears of joy, and then when I looked to my left to see Earl Sweatshirt standing 5 feet from me on the other
                        side of the barricade with the exact same shock and awe reaction, I fucking lost it. I cried. While professional dancers twerked on stage.
                    </Slimboi>

                    <Vid src='https://www.youtube.com/embed/9BJj7cd4Vic' />

                    <Slimboi>
                        When I Got Home is a monumental album. Solange flexes so fucking hard on this album, she literally had Sampha, Panda Bear and Tyler, The
                        Creator stop by for ad-libs on one of the mellowest songs here. This album is dreamlike in the way the songs transition into one another,
                        it’s powerful in its themes of black female sexuality and artistic expression, and it’s a definitive statement that this is no longer just
                        “Beyoncé’s little sister”. This is the new album from the best performer I saw in 2019, and solidified her as one of my favorite artists
                        in RnB working today.
                    </Slimboi>



                </Home>
            </ExpansionPanel>

        </div>
    )
}
