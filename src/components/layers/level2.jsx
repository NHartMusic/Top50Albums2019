import React from 'react'
import styled from 'styled-components'
import { Slimboi } from '../ui/typography'

const Level2 = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    background: turquoise;
    height: 100px;
`

export default props =>
    <Level2 position='static'>

        <Slimboi >
            N H
        </Slimboi>

    </Level2>