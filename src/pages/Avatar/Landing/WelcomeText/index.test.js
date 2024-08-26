import React from 'react'
import WelcomeText from './index'
import {render} from '@testing-library/react'
import { MemoryRouter as Router} from 'react-router-dom'

describe('WlecomeText component',()=>{
    let container
    beforeEach(()=>{
        const renderResult=render(
            <Router>
                <WelcomeText/>
            </Router>
        )
        container=renderResult.container
    })
    it('renders correctly',()=>{
        expect(container).toMatchSnapshot();

    })
})