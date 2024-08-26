import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import EndInterview from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <EndInterview/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})