import { MemoryRouter as Router } from "react-router-dom";
import {render,screen} from "@testing-library/react";
import AvatarImage from "./index";

describe('Image Component',()=>{
it('renders correctly',()=>{
    const {container}=render(
        <Router>
            <AvatarImage/>
        </Router>
    )
    expect(container).toMatchSnapshot()
})
test('renders with correct props',()=>{
    const src='/assests/images/avatar.svg'
    const alt='Avatar Image'
    render(<AvatarImage src={src} alt={alt}/>)
    const imageElement=screen.getByAltText(alt)
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src',src);


})
})