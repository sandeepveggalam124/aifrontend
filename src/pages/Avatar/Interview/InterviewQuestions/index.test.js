import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import InterviewQuestion from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <InterviewQuestion/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})