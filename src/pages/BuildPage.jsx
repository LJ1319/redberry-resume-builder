import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ResumePreview from "../components/ResumePreview/ResumePreview";

const titles = {
  0: "პირადი ინფო",
  1: "გამოცდილება",
  2: "განათლება",
};

export default function BuildPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [page, setPage] = useState(0);
  const [image, setImage] = useState("");

  const title = titles[page];
  const titlesSize = Object.keys(titles).length;
  const index = Number(Object.keys(titles)[page]) + 1;

  useEffect(() => {
    setImage(localStorage.getItem("recent-image"));
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex h-screen w-7/12 flex-col">
        <Navbar title={title} titlesSize={titlesSize} index={index} />

        <div className="flex h-screen flex-col bg-[#F9F9F9] font-helvetica-neue">
          <Outlet context={[setName, setLastName, setPage, setImage]} />
        </div>
      </div>
      <ResumePreview name={name} lastName={lastName} image={image} />
    </div>
  );
}
