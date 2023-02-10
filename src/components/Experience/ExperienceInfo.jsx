import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function ExperienceInfo() {
  const [onChangeName, onChangePassword, setPage] = useOutletContext();

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  const reg = /^\w|[ა-ჰ]{2,}$/;

  return (
    <div className="font-helvetica-neue all-small-caps">
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
