import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import CameraComponent from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <CameraComponent/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})