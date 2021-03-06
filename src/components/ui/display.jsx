import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { VideoMobile, SmallBoy, TinyBoy } from './mediaQueries'


const DescriptionAlignment = makeStyles(theme => ({
    root: {
        display: 'block'
    }
}))

const Album = styled(ExpansionPanelSummary)`
    display: flex;
    margin: 0 auto;
    height: 50px;
    box-shadow: 0px;

    @media ${VideoMobile} {
       height: 70px;
    }
`

const Details = styled(ExpansionPanelDetails)`
    display: block;
    height: 300px;
    text-align: left;
`

const Vid = styled.iframe`
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 315px;

    @media only screen and ${VideoMobile} {
        width: 400px;
    }

    @media only screen and ${SmallBoy} {
        width: 350px;
        height: 250px;
    }

`

const MainVid = styled(Vid)`
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 315px;

    @media only screen and ${VideoMobile} {
        width: 400px;
    }

    @media only screen and ${SmallBoy} {
        width: 350px;
        height: 250px;
    }

    @media only screen and ${TinyBoy} {
        width: 200px;
        height: 180px;
    }

`

export { DescriptionAlignment, Album, Details, Vid, MainVid }