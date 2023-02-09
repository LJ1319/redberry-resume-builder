import { useOutletContext } from "react-router-dom";

export default function PersonalInfo() {
  const [onChangeName, onChangePassword] = useOutletContext();

  return (
    <div>
      <p>Personal Info Component</p>
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
