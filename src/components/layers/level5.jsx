import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi } from '../ui/typography'
import { DescriptionAlignment, MainVid, Album, Details } from '../ui/display'
import { SmallerTablet, RegularBoyMobile, VideoMobile, SmallBoy } from '../ui/mediaQueries'
import { Wino, Reptile } from '../ui/colors'

const Weyes = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Wino};
    box-shadow: 0px;
`

const Titanic = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Reptile};
    height: 550px;

    @media ${SmallerTablet} {
        height: 720px;
    }

    @media ${RegularBoyMobile} {
        height: 810px;
    }

    @media ${VideoMobile} {
        height: 920px;
    }

    
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_5">
            <ExpansionPanel>
                <Weyes>
                    <Thiccboi>5. Weyes Blood - Titanic Rising </Thiccboi>
                </Weyes>
                <Titanic className={classes.root}>

                    <Slimboi>
                        I have rarely in my 27 years of life seen a pop music album that has such magnificent thematic consitency between the album title, cover,
                        lyrical content and music production. This album is positively drenched in reverb, spacious synths and fluid guitars. The lyrics often use
                        themes of astronomy and aquatic locations to highlight how depression and emotional emptiness can feel like floating in a void. This is
                        probably the saddest pop album of the year, but through dark humor, stunning instrumentation and incredible vocal performances from Natalie
                        Merring, it is an absolute blast to listen to. Never has drowning in a cosmic ocean sounded so glorious.
                    </Slimboi>

                    <MainVid src='https://www.youtube.com/embed/RFtRq6t3jOo' />

                    <Slimboi>
                        ALERT: Those are my top 5 albums of the year! Fuck you if you disagree. Fight me on Twitter. The rest of this list will not have any text
                        descriptions for the albums, but they will continue to have links to songs or video performances from the artists. If I had time to write
                        a blurb for everyone (or if I was getting paid to do this instead of doing it in my spare time on vacation), I absolutely would. In the info
                        section at the end you can find some other music writing I have done on my personal website, and I intend on doing much more writing and projects
                        like this in 2020 and beyond. Thanks for reading - NH
                    </Slimboi>

                </Titanic>
            </ExpansionPanel>

        </div>
    )
}
