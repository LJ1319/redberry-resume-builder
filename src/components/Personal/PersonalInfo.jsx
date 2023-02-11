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
  const [setName, setLastName, setPage, setImage] = useOutletContext();

  useEffect(() => {
    setPage(0);
  }, [setPage]);

  const handleImageUpload = (file) => {
    // console.log(file);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result);
      localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="mx-44 my-16 flex gap-12">
        <label>
          სახელი
          <input
            className="block w-80 border-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          გვარი
          <input
            className="block w-80 border-2"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
      </div>

      <div className="mx-44">
        <label className="flex w-max cursor-pointer items-center text-center">
          <span className="text-lg">პირადი ფოტოს ატვირთვა</span>
          <div className="mx-4 h-8 w-28 rounded bg-[#0E80BF] p-1 text-sm text-white">
            ატვირთვა
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                handleImageUpload(e.target.files[0]);
                // console.log(typeof e.target.files[0]);
              }}
            />
          </div>
        </label>
      </div>
    </>
  );
}
