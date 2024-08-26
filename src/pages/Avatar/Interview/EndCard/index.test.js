import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import EndCard from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <EndCard/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})