import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function BuildPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const onChangeName = (newValue) => {
    setName(newValue);
  };

  const onChangeLastName = (value) => {
    setLastName(value);
  };

  return (
    <div>
      <p>Resume Build Page</p>
      <Outlet context={[onChangeName, onChangeLastName]} />
      {name} {lastName}
    </div>
  );
}
