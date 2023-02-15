import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildPage from "./pages/BuildPage";
import PersonalInfo from "./components/Personal/PersonalInfo";
import ExperienceInfo from "./components/Experience/ExperienceInfo";
import EducationInfo from "./components/Education/EducationInfo";
import ResumePage from "./pages/ResumePage";
import { ResumeContextProvider } from "./context/ResumeContext";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ResumeContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="build" element={<BuildPage />}>
          <Route index element={<PersonalInfo />} />
          <Route path="experience" element={<ExperienceInfo />} />
          <Route path="education" element={<EducationInfo />} />
        </Route>

        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ResumeContextProvider>
  );
}

export default App;
