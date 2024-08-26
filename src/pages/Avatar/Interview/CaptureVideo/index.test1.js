import { MemoryRouter as Router } from "react-router-dom";
import {render} from "@testing-library/react";
import VideoComponent from "./index";


it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <VideoComponent/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})