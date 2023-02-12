import { useField } from "formik";

import error from "../../assets/icons/error.svg";
// import check from "../../assets/icons/check.svg";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  // console.log(props);
  // console.log(field.onBlur);

  // console.log(meta.)

  return (
    <div>
      <label>
        <span
          className={`font-bold ${
            meta.touched && meta.error && "text-red-500"
          }`}
        >
          {label}
        </span>
        <input
          {...field}
          {...props}
          className={`px-4 w-full border-[1px] border-[#BCBCBC] h-12 rounded my-2 focus:outline-none focus:border-2 ${
            meta.touched && meta.error && "border-red-500"
          } ${
            meta.value &&
            !meta.error &&
            "border-[#98E37E] bg-[url(@/assets/icons/check.svg)] bg-no-repeat bg-right bg-origin-content"
          }`}
        />
      </label>

      {/* <span className="text-sm text-[#2e2e2e]">{meta.error}</span> */}

      {/* {meta.touched && !meta.error && <img src={check} alt="success" />} */}
      {meta.touched && meta.error && (
        <span className="flex justify-end">
          <img src={error} alt="error" className="absolute" />
        </span>
      )}
    </div>
  );
}
