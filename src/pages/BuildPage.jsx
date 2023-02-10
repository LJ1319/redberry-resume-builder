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

  const onChangeName = (newValue) => {
    setName(newValue);
  };

  const onChangeLastName = (value) => {
    setLastName(value);
  };

  const handleImageUpload = (file) => {
    // console.log(file);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result);
      localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    setImage(localStorage.getItem("recent-image"));
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex h-screen w-7/12 flex-col">
        <Navbar title={title} titlesSize={titlesSize} index={index} />

        <div className="flex h-screen flex-col bg-[#F9F9F9] font-helvetica-neue">
          <Outlet
            context={[
              onChangeName,
              onChangeLastName,
              setPage,
              handleImageUpload,
            ]}
          />
        </div>
      </div>
      <ResumePreview name={name} lastName={lastName} image={image} />
    </div>
  );
}
