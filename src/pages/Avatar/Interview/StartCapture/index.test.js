import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import StartCapture from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <StartCapture/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})