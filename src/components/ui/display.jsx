import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'


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
`

export { DescriptionAlignment, Album, Details, Vid }