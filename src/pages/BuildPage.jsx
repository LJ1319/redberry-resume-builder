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

  const title = titles[page];
  const titlesSize = Object.keys(titles).length;
  const index = Number(Object.keys(titles)[page]) + 1;

  return (
    <div>
      <Navbar title={title} titlesSize={titlesSize} index={index} />
      <Outlet
        context={[onChangeName, onChangeLastName, setPage, handleImageUpload]}
      />
      <ResumePreview name={name} lastName={lastName} image={image} />
    </div>
  );
}
