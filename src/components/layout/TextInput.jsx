import { useField } from "formik";

import error from "../../assets/icons/error.svg";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

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
          className={`my-2 h-12 w-full rounded border-[1px] px-4 focus:border-2 focus:outline-none 
          ${
            meta.touched && meta.error
              ? "border-red-500"
              : meta.touched & !meta.error
              ? "border-[#98E37E] bg-[url(@/assets/icons/check.svg)] bg-right bg-no-repeat bg-origin-content"
              : meta.value & meta.error
              ? "border-red-500"
              : "border-[#BCBCBC]"
          }`}
        />
      </label>

      {meta.touched && meta.error && (
        <span className="flex justify-end">
          <img src={error} alt="error" className="absolute" />
        </span>
      )}
    </div>
  );
}
