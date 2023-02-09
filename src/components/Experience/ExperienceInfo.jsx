import { useOutletContext } from "react-router-dom";

export default function ExperienceInfo() {
  const [onChangeName, onChangePassword] = useOutletContext();

  return (
    <div>
      <p>Experience Component</p>
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
