// import React from 'react'
// import Login from './index'
// import renderer from 'react-test-renderer'
// import { fireEvent, render,screen, waitFor,act,debug } from '@testing-library/react'
// import {userEvent} from '@testing-library/user-event'
// import { MemoryRouter as Router } from 'react-router-dom'
// // import Toast from '../../../utils/toast'
// import Register from '../Register'






// describe('Login Component',()=>{
//     // render(<Router><Login/></Router>)
//     // const pageTitle=screen.getByRole('heading',{name:'Login'});
//     // const userMsg=screen.getByText(/Enter your Email or phone number as well as passcode/i,{exact:false});
//     // const emailInput = screen.getByPlaceholderText(/email/i);
//     // const passwordInput = screen.getByPlaceholderText(/password/i);
//     // const validationMessage = screen.getByText('Please Enter Valid Email ID or Phone Number', { exact: false });
//     // const ForgotPasswordLink=screen.getByRole('link',{ name: 'Forgot Password?' });

//     // const LoginButton=screen.getByRole('button',{ name: /login/i });
//     // const RegisterButton=screen.getByRole('button',{ name: /register/i });



//     // it('login page rendering ',()=>{
        
       
//     //     expect(userMsg).toBeInTheDocument();
//     //     expect(emailInput).toBeInTheDocument();
//     //     expect(passwordInput).toBeInTheDocument();
//     //     expect(validationMessage).toBeInTheDocument();
//     //     expect(LoginButton).toBeInTheDocument();
//     //     expect(RegisterButton).toBeInTheDocument();
//     //     expect(ForgotPasswordLink).toBeInTheDocument();

//     // })

//     // it("Filling details and clicking buttons in a login Form",async () => {

//     //     render(<Router><Login/></Router>)

//     //     const email=await waitFor(() => {
//     //         return screen.getByPlaceholderText(/email/i);
//     //         //expect(emailInput).toBeInTheDocument();
//     //       });
         
//     //       console.log(email)
 
//     //       await userEvent.type(email, "hello");
       
//     //   });
//     // });
//     let container
//     beforeEach(()=>{
//         const renderResult =render(
//             <Router>
//                 <Login/>
//             </Router>
//         )
//         container=renderResult.container
//     })


//     it('renders correctly',()=>{
        
//         expect(container).toMatchSnapshot();
//     })

//     // it('toggles password visibility', () => {

//     //    const passwordInput = container.querySelector('input[name="password"]');
//     //    const toggleButton = container.querySelector('[data-testid="toggle-password"]');
    
//     //     fireEvent.click(toggleButton);
    
//     //     expect(passwordInput.type).toBe('text');
//     //   });
      
      
      

      
// })
// // test("Filling details and clicking buttons in a login Form", async() => {
// //     render(
// //         <Router>
// //             <Login/>
// //             <Register/>
// //         </Router>
// //     )
// //         const emailInput=screen.getByPlaceholderText(/email/i)
// //         await userEvent.type(emailInput, "test@gmail.com");
// //         const passwordInput=screen.getByPlaceholderText(/password/i)
// //         await userEvent.type(passwordInput, "hello");

// //         const loginButton=screen.getByRole("button",{name:/login/i})

// //         await userEvent.click(loginButton)

// //         // let successToast;
// //         await waitFor(() => {
// //             //successToast = screen.queryByText('logged in');
// //             expect(screen.getByRole('heading',{name:'Sign Up'})).toBeInTheDocument();


// //         });
// //         //expect(successToast.textContent).toContain('logged in');

// //         expect(emailInput).toHaveValue("test@gmail.com")
// //         expect(passwordInput).toHaveValue("hello")

// // });
