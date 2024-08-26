import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import AvatarLanding from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <AvatarLanding/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})