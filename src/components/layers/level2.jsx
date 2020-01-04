import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi, Link } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GrunTee, Wino } from '../ui/colors'

const Tyler = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GrunTee};
    box-shadow: 0px;
`

const Igor = styled(Details)`
    display: block;
    background: ${Wino};
    height: 600px;
    text-align: left;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_2">
            <ExpansionPanel>
                <Tyler>
                    <Thiccboi>2. Tyler, The Creator - Igor</Thiccboi>
                </Tyler>
                <Igor className={classes.root}>

                    <Slimboi>
                        I knew Igor was special when I first heard it. I wrote all about it here <Link href="https://www.nhiacrkt.com/post/album-review-tyler-the-creator-igor">here</Link>. I could tell that this was the moment that one of rap’s most
                        interesting and polarizing figures finally settled into what kind of artist he wanted to be. It feels like a timeless album, one that
                        draws on so many influences from so many past eras of black music, yet is somehow quintessentially 2019.
                    </Slimboi>

                    <Slimboi>
                        As the Drake fiasco proved, the immaturity of Tyler’s fanbase and the legacy of Odd Future is far from extinct, but make no mistake - this
                        is the most mature mainstream release of the year. This is a breakup album unlike any other. It defies genre, it shifts between tones and
                        styles smoother than coconut butter, and it wears its emotional trauma on its sleeve. The sleeve of a 300 dollar shirt being worn by a gap
                        toothed dark skin black man whose ego and past antics are finally justified by a successful transformation from an internet edgelord into a
                        soulful, multifaceted songwriter, producer, pianist and oh so much more.
                    </Slimboi>

                    <Vid src="https://www.youtube.com/embed/ceLyMb0MGLE" />

                    <Slimboi>
                        Igor is a practically flawless album, and the best of Tyler’s career. As I said in my review linked above, the closing three tracks here are
                        some of the strongest closing tracks I’ve ever heard on a hip hop album (although this is hardly a hip hop album), and on their own they’re enough
                        to guarantee this project a place in the top 5 of the year. It just so happens the rest of Igor is great too.
                    </Slimboi>

                </Igor>
            </ExpansionPanel>

        </div>
    )
}
