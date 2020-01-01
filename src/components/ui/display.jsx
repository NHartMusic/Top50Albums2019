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
    height: 20px;
    box-shadow: 0px;
`

const Details = styled(ExpansionPanelDetails)`
    display: block;
    height: 500px;
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
        width: 300px;
        height: 200px;
    }

    @media only screen and ${TinyBoy} {
        width: 200px;
        height: 120px;
    }

`

export { DescriptionAlignment, Album, Details, Vid }