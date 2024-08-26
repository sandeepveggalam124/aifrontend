import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import WaitingRoom from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <WaitingRoom/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})