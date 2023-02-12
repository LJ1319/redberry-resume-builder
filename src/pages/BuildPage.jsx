import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const TITLES = {
  0: "პირადი ინფო",
  1: "გამოცდილება",
  2: "განათლება",
};

const LOCAL_STORAGE_KEY = "RESUME";

const INITIAL_VALUES = {
  name: "",
  surname: "",
  email: "",
  phone_number: "",
  experiences: [
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ],
  educations: [
    {
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    },
  ],
  image: "",
  about_me: "",
};

export default function BuildPage() {
  const [initialValues, handleUpdateForm] = useLocalStorageState({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  const [page, setPage] = useState(0);
  const title = TITLES[page];
  const titlesSize = Object.keys(TITLES).length;
  const index = Number(Object.keys(TITLES)[page]) + 1;

  return (
    <div className="flex flex-row">
      <div className="flex h-screen w-7/12 flex-col">
        <Navbar title={title} titlesSize={titlesSize} index={index} />

        <div className="flex h-screen flex-col bg-[#F9F9F9] font-helvetica-neue">
          <Outlet context={[setPage, initialValues, handleUpdateForm]} />
        </div>
      </div>
      <ResumePreview initialValues={initialValues} page={page} />
    </div>
  );
}
