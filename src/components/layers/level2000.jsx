import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi, Link } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { Cephalopod } from '../ui/colors'

const Nick = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${Cephalopod};
    box-shadow: 0px;
`

const Hart = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${Cephalopod};
    height: 300px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_2000">
            <ExpansionPanel>
                <Nick>
                    <Thiccboi> Top 10 Best Gigs</Thiccboi>
                </Nick>
                <Hart className={classes.root}>

                    <Slimboi>
                        Here are the best live performances I saw in the year 2019, in order:
                    </Slimboi>

                    <Slimboi>
                        <ol>
                            <li>Solange - Flow Festival, Helsinki</li>
                            <li>Ty Segall (Performing ‘First Taste’ and ‘Melted’) - Festaal Kreuzberg, Berlin</li>
                            <li>James Blake - Flow Festival, Helsinki</li>
                            <li>King Gizzard and The Lizard Wizard - Columbiahalle, Berlin</li>
                            <li>Girl Band - Bi Nuu, Berlin</li>
                            <li>Oh Sees - Festaal Kreuzberg, Berlin</li>
                            <li>Toro Y Moi - Hearst Greek Theater, Berkely</li>
                            <li>Big Thief - Flow Festival, Helsinki</li>
                            <li>Tame Impala - Max Scmelling Halle, Berlin</li>
                            <li>The Cure - Flow Festival, Helsinki</li>
                        </ol>
                    </Slimboi>

                    <Slimboi>
                        Here's a link to some <Link href='https://www.instagram.com/p/B6v8AGyofoz/'>photos</Link>
                    </Slimboi>

                </Hart>
            </ExpansionPanel>

        </div>
    )
}
