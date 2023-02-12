import { useField } from "formik";

// import error from "../../assets/icons/error.svg";

export default function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>
        <span className="font-bold">{label}</span>
        <textarea
          {...field}
          {...props}
          className={`my-2 p-4 block w-full h-28 border-[1px]  rounded focus:outline-none focus:border-2 
          ${
            meta.touched && meta.value
              ? "border-[#98E37E] bg-[url(@/assets/icons/check.svg)] bg-no-repeat bg-right bg-origin-content"
              : "border-[#BCBCBC]"
          }`}
          // className={`p-4 w-full border-[1px] h-28 rounded my-2 focus:outline-none focus:border-2 ${
          //   meta.touched && meta.error
          //     ? "border-red-500"
          //     : meta.value && !meta.error
          //     ? "border-[#98E37E] bg-[url(@/assets/icons/check.svg)] bg-no-repeat bg-right bg-origin-content"
          //     : "border-[#BCBCBC]"
          // }`}
        />
      </label>

      {/* {meta.touched && meta.error && (
        <span className="flex justify-end">
          <img src={error} alt="error" className="absolute" />
        </span>
      )} */}
    </div>
  );
}
