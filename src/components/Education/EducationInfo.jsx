import { useOutletContext } from "react-router-dom";

export default function EducationInfo() {
  const [onChangeName, onChangePassword] = useOutletContext();

  return (
    <div>
      <p>Education Component</p>
      <input
        className="border-2 border-black"
        onChange={(e) => {
          onChangeName(e.target.value);
        }}
      />
      <input
        className="border-2 border-black"
        onChange={(e) => {
          onChangePassword(e.target.value);
        }}
      />
    </div>
  );
}
