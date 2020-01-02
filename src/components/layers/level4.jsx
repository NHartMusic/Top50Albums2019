import React from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
//ui
import { Thiccboi, Slimboi } from '../ui/typography'
import { DescriptionAlignment, Vid, Album, Details } from '../ui/display'
import { JailorSerry, PupPup } from '../ui/colors'

const GibbLib = styled(Album)`
    display: flex;
    margin: 0 auto;
    background: ${JailorSerry};
    height: 20px;
    box-shadow: 0px;
`

const Bandana = styled(Details)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: ${PupPup};
    height: 470px;
`

export default function SimpleExpansionPanel() {
    const classes = DescriptionAlignment()

    return (
        <div className="level_4">
            <ExpansionPanel>
                <GibbLib>
                    <Thiccboi>4. Freddie Gibbs + Madlib - Bandana </Thiccboi>
                </GibbLib>
                <Bandana className={classes.root}>

                    <Slimboi>
                        Bandana might be the most gratifying hip hop sequel album ever made. As I wrote about in great depth here, it expands the rapport of its
                        collaborators in ways that show them to be obviously learning and growing from each other’s influences. The brotherly bond  between its two
                        stars (which can be seen at the end of the video below) is incredibly wholesome for an album largely about drug dealing, the politics of
                        racial inequality in America, and various other generally depressing topics. This is bad guy music made by two of the most likeable figures
                        in hip hop.
                    </Slimboi>

                    <Vid src='https://www.youtube.com/embed/1alXHOMDBN4' />

                </Bandana>
            </ExpansionPanel>

        </div>
    )
}
