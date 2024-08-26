import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import FinishInterview from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <FinishInterview/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})