import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// const anyReg = /^.{2,}$/;
// const geoRegex = /^[ა-ჰ]{2,}$/;
// const reg = /^\w|[ა-ჰ]{2,}$/;
// const geoPhoneRegex = /^\+(995) (\d{3} \d{2} \d{2} \d{2})$/;
// const redberryEmailRegex = /^\w[\w.\-]{0,25}@(redberry)\.ge$/;
// let number = "+995 598 11 08 49";
// let formattedResult = number.replace(/[^+\d]+/g, "");
// console.log(geoPhoneRegex.test(number));

export default function PersonalInfo() {
  const [onChangeName, onChangeLastName, setPage, handleImageUpload] =
    useOutletContext();

  useEffect(() => {
    setPage(0);
  }, [setPage]);

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
          onChangeLastName(e.target.value);
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          handleImageUpload(e.target.files[0]);
        }}
      />
    </div>
  );
}
