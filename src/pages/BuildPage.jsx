import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const titles = {
  0: "პირადი ინფო",
  1: "გამოცდილება",
  2: "განათლება",
};

export default function BuildPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [page, setPage] = useState(0);

  const onChangeName = (newValue) => {
    setName(newValue);
  };

  const onChangeLastName = (value) => {
    setLastName(value);
  };

  const title = titles[page];
  const titlesSize = Object.keys(titles).length;
  const index = Number(Object.keys(titles)[page]) + 1;

  return (
    <div>
      <Navbar title={title} titlesSize={titlesSize} index={index} />
      <Outlet context={[onChangeName, onChangeLastName, setPage]} />
      {name} {lastName}
    </div>
  );
}
