import styled from 'styled-components'
import { VideoMobile } from './mediaQueries'

const Thiccboi = styled.h1`
    font-family: Helvetica;
    display: flex;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 800px;
    color: white;

    @media ${VideoMobile} {
        font-size: 14px;
        font-weight: 600px;
    }
`

const Slimboi = styled.p`
    font-family: Helvetica;
    text-align: left;
    font-size: 16px;
    font-weight: 600px;
    color: white;
    margin: 15px;
    display: block;
`

const Link = styled.a`
    color: white;
`

export { Thiccboi, Slimboi, Link }