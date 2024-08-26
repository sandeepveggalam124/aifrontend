import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import Register from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <Register/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})