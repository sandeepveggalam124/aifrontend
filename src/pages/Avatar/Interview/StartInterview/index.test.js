import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import StartInterview from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <StartInterview/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})