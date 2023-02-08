import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonalInfoPage from "./pages/PersonalInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="build" element={<PersonalInfoPage />} />
    </Routes>
  );
}

export default App;
