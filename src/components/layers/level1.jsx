import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui 
import { Yurple, Cephalopod } from '../ui/colors'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Thiccboi, Slimboi } from '../ui/typography'
//media queries
import { 
    SmallDesktop, 
    Tablet, 
    SmallerTablet, 
    EvenSmallerTablet, 
    BigBoyMobile,
    MediumBoyMobile,
    RegularBoyMobile,
    VideoMobile,
    JustForAngel,
    SmallBoy,
    TinyBoy
 } from '../ui/mediaQueries'

const Angel = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Yurple};
    height: 20px;
    box-shadow: 0px;
`

const AllMirrors = styled(Details)`
    display: block;
    background: ${Cephalopod};
    height: 1200px;
    text-align: left;

    @media ${SmallDesktop} {
        height: 1300px;
    }

    @media ${Tablet} {
        height: 1400px;
    }

    @media ${SmallerTablet} {
        height: 1500px;
    }

    @media ${EvenSmallerTablet} {
        height: 1600px;
    }

    @media ${BigBoyMobile} {
        height: 1700px;
    }

    @media ${MediumBoyMobile} {
        height: 1800px;
    }

    @media ${RegularBoyMobile} {
        height: 1950px;
    }

    @media ${VideoMobile} {
        height: 2200px;
    }

    @media ${JustForAngel} {
        height: 2440px;
    }

    @media ${SmallBoy} {
        height: 2600px;
    }
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_1">
            
            <ExpansionPanel>
                <Angel>
                    <Thiccboi>1. Angel Olsen - All Mirrors</Thiccboi>
                </Angel>
                <AllMirrors className={classes.root}>

                    <Slimboi>
                        We've all seen what success can do to an artist. I remember how quickly Kings of Leon  turned from The Strokes 
                        of the American South to Diet U2 after they finally broke through in the American mainstream. I still feel the sting of the 
                        moment I realized that Danger Mouse had coopted the Black Keys, and that their music would never be without bass or synthesizer
                        ever again. I'll never forget the precise second when Vic Mensa stopped being interesting to me, and abruptly shifted from 
                        oddball Chance the Rapper collaborator to a guy who does boring hooks for bigger rappers.
                    </Slimboi>

                    <Slimboi>
                        But every once in a while, success and collaboration with big names can wield a wonderful, transformative surprise, an expansion
                        and deepening of previous musical styles and lyrical themes, a transition from an indie darling to a bonafide star. 
                    </Slimboi>

                    <Slimboi>
                       Such is the case with Angel Olsen's 'All Mirrors', the most exquisitely produced, emotionally gratifying, and consistently impressive
                       album of the year. An album so fucking good I can feel myself tearing up just thinking about it, while I write this on my phone in a 
                       dive bar in Lower Saxony filled with old men smoking cigars who look like they would kill me if I put on some Angel Olsen right now. 
                    </Slimboi>

                    
                        <Vid src="https://www.youtube.com/embed/dyDVUA-t5xU" />
                    

                    <Slimboi>
                       Before going on tour with Arcade Fire and creating new wave bangers with Mark Ronson, Olsen was a mainstay for low-key, lo-fi folk music
                       to help American Spirit smokers through breakups. But 'All Mirrors' is an album as big as they come, and it is a risk that paid off in spades.
                       This is a record that drips with pure glam and decadence, yet never loses the emotional core of the artist that every sad Stereogum reader
                       fell in love with back when they were struggling through their art degree. The string arrangements here are massive, the synths and bass
                       are positively groundshaking, the guitars are explosive, and Olsen's greatest weapon, her ethereal voice, contorts itself into shapes and 
                       tones that no one could have predicted she was ever capable of.
                    </Slimboi>

                    <Slimboi>
                        From the epic, thundering opening of "Lark", through the slinking synth thump of "New Love Cassette", to the pure arena pop bliss of "What It
                        Is", the first two thirds of 'All Mirrors' is a whirlwind of the best elements of pop music past and present - but it's the final songs that really 
                        cement this as an instant classic. Using the heart-wrenching, slow-building "Impasse" as a pivot point, the album ends not with pop (or folk) but yet 
                        ANOTHER side of the singer we haven't heard before - pure vintage jazz nightclub torch songs that sound like they were written 70+ years ago, and then
                        rerecorded with the best audio quality, musicianship and arrangement that the modern era can provide.
                    </Slimboi>

                    <Slimboi>
                        Every time an AO record drops, I worry that it will drag up feelings of my most recent breakup, and I always feel a bit hesitant to dive into it. I 
                        generally don't listen to sad folk music much anymore, I stick mainly with hip hop, RnB, garage rock and psychedelia - high energy music for the most part.
                        What I could have never expected from 'All Mirrors' is that it would drag up the feelings from my breakup earlier this year only to beat them back down again 
                        with catharsis, confidence, and sheer bombast. Olsen sings about heartbreak here as she always does, but this time it doesn't feel like a sad girl playing 
                        quietly in a dimly lit venue for a bunch of motionless hipsters. It feels like an absolute superstar standing on the world stage, singing about every emotion
                        she's ever experienced in her life, with enough intensity to cause an amplifier to combust. This album helped me through the aftermath of a breakup, through 
                        changing jobs and dealing with getting a new visa in a foreign country, through the stress of moving multiple times in one year, and at the end of the day 
                        I can still listen to it without purely associating it with that stress because it just fucking BANGS that hard. Those SYNTHS. The strings. It really is that 
                        good. This is my favorite album of the year, my favorite album of Olsen's career, and one of the best albums of the decade. As far as I am concerned, this is 
                        THE new textbook example of how to break into the mainstream with class, vulnerability, and spectacle - while never losing sight of where you came from, and 
                        the tradgedies and triumphs that brought you to now. 
                    </Slimboi>

                </AllMirrors>
            </ExpansionPanel>
            
        </div>
    )
}
