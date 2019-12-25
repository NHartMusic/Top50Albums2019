import React from 'react'
import styled from 'styled-components'
import { Slimboi } from '../ui/typography'

const Level4 = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: linear-gradient(90deg, #FDE74C 40%, #9BC53D 60%);
    height: 100px;
`

export default props =>
    <Level4 position='static'>

        <Slimboi >
            N H
        </Slimboi>

    </Level4>