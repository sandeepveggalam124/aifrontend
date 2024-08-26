import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import Timer from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <Timer/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})