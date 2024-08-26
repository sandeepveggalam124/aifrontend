import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/home/Footer/index";
import MainBox from "./pages/Mainbox/index";
import Header from "./components/home/Header/index";
import { ToastContainer } from "react-toastify";
import FinishInterview from "./pages/Avatar/Interview/FinishInterview";
import EndNote from "./pages/Avatar/Interview/EndInterview";
import InterviewQuestions from "./pages/Avatar/Interview/InterviewQuestions";
import AvatarLanding from "./pages/Avatar/Landing/AvatarLanding";
import GoLink from "./components/home/GoLink";
import WelcomeText from "./pages/Avatar/Landing/WelcomeText";
import WaitingRoom from "./pages/Avatar/Interview/WaitingRoom";
import AdminLandingPage from "./pages/admin/AdminLandingPage";
// import { LoginProvider } from "./contexts/loginContext";
import AddOrganization from "./pages/admin/AddOrganization";
import "./App.css";
import OrganizationLandingPage from "./pages/organization/OrganizationLandingPage";

function App() {
  const location = useLocation();
  const isAdminLanding =
    location.pathname === "/adminLanding" ||
    location.pathname === "/organizationLanding" ||
    location.pathname === "/organizationLanding/jobDescription";

  return (
    <>
      {/* <LoginProvider> */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!isAdminLanding && <Header />}
      <Routes>
        <Route path="/" element={<MainBox />} />
        <Route path="/login" element={<MainBox />} />
        <Route path="/forgotPassword" element={<MainBox />} />
        <Route path="/otpVerification" element={<MainBox />} />
        <Route path="/updatePassword" element={<MainBox />} />
        <Route path="/success" element={<MainBox />} />
        <Route path="/avatarLanding" element={<AvatarLanding />} />
        <Route path="/welcomeText" element={<WelcomeText />} />
        <Route path="/goLink" element={<GoLink />} />
        <Route path="/interview" element={<AvatarLanding />} />
        <Route path="/interview/startInterview" element={<AvatarLanding />} />
        <Route path="/interview/captureIcons" element={<AvatarLanding />} />
        <Route path="/interview/end" element={<EndNote />} />
        <Route path="/interview/finish" element={<FinishInterview />} />
        <Route path="/interview/question" element={<InterviewQuestions />} />
        <Route path="/interview/captureicons" element={<AvatarLanding />} />
        <Route path="/interview/captureVideo" element={<AvatarLanding />} />
        <Route path="/interview/startCapture" element={<AvatarLanding />} />
        <Route path="/interview/waitingroom" element={<WaitingRoom />} />
        <Route path="/interview/EndInterview" element={<EndNote />} />
        <Route path="/adminLanding" element={<AdminLandingPage />} />
        <Route
          path="/organizationLanding"
          element={<OrganizationLandingPage />}
        />
        <Route
          path="/adminLanding/addOrganization"
          element={<AddOrganization />}
        />
      </Routes>
      {!isAdminLanding && <Footer />}
      {/* </LoginProvider> */}
    </>
  );
}

export default App;
