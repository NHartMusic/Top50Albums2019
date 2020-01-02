import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi, Link } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { GothGirlfriend } from '../ui/colors'

const Nick = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 20px;
    box-shadow: 0px;
`

const Hart = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${GothGirlfriend};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_0">
            <ExpansionPanel>
                <Nick>
                    <Thiccboi>NH Top 50 Albums 2019 (CLICK ME)</Thiccboi>
                </Nick>
                <Hart className={classes.root}>

                    <Slimboi>
                        Hey kids. It's me Nick Hart, your #1 music boy. This is an app I made using React (with Styled Components and Material UI if
                        you care about that shit) to show my favorite albums of 2019 in a nice and pretty and fun and exciting way.
                        Just as you clicked this panel and it expanded to show you this text, every panel you click expands to show you
                        a link of my favorite song on each album or a video of a performance by that artist. If you click the title again, the panel will retract. Fun.
                        The top 5 items have fun and exciting and nice little blurbs I wrote about the albums. I wanted to write something about every album but I was
                        lazy and didn't have the time. Maybe I will update it over time and add blurbs to all of them. Maybe not. Who cares.
                    </Slimboi>

                    <Slimboi>
                        Here's <Link href='www.nhiacrkt.com'>my website</Link>, which I haven't updated in way too fucking long. Here's my <Link href='https://www.instagram.com/nhiacrkt/'>
                            Instagram</Link>. Here's my <Link href='https://twitter.com/nHiAcRkT'>Twitter </Link>. Here's a <Link href='https://www.facebook.com/nhartmusic'>Facebook page </Link>
                        for my music which I never use anymore because I don't really make much music anymore. Maybe I will make some more music in the year 2020. Who knows.
                        Here's a <Link href='nhiacrkt.bandcamp.com'>link</Link> to the last music that I released. Here's my <Link href='https://github.com/NHartMusic/Top50Albums2019'>
                            Github</Link> account if you want to see the code that I wrote for this app. It's not the best code that I've ever written but I think it came out pretty
                    cool and fun and exciting.
                    </Slimboi>

                    <Slimboi>
                        2019 was a pretty great year for music. Let's see what 2020's got.
                    </Slimboi>

                </Hart>
            </ExpansionPanel>

        </div>
    )
}
