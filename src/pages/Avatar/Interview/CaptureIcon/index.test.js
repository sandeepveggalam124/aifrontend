import { MemoryRouter as Router } from "react-router-dom";
import {render,fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';

import CaptureIcons from "./index";

describe('capture component',()=>{
    let container
    beforeEach(()=>{
        const renderResult =render(
            <Router>
                <CaptureIcons/>
            </Router>
        )
        container=renderResult.container
    })
    it('renders correctly',()=>{
        
        expect(container).toMatchSnapshot();
        console.log(container)
    })
    // it('clicking on an icon updates the state',()=>{
    //     const { getByTestId } = container;
    //     console.log(getByTestId)    
    //     expect(getByTestId(lookAboveIcon)).toHaveClass('icon');
    //     expect(getByAltText('lookAboveIcon')).not.toHaveClass('green-icon');
    //     act(()=>{        
    //         fireEvent.click(getByAltText('lookAboveIcon'));
    //     })
    //     expect(getByAltText('lookAboveIcon')).toHaveClass('green-icon');


    //  })
})
