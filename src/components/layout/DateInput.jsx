import { useField } from "formik";

import error from "../../assets/icons/error.svg";

export default function DateInput({ label, ...props }) {
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
          className={`px-4 w-full border-[1px] h-12 rounded my-2 focus:outline-none focus:border-2 
          ${
            meta.touched && meta.error
              ? "border-red-500"
              : meta.touched & !meta.error
              ? "border-[#98E37E]"
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
