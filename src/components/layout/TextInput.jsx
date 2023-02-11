import { useField } from "formik";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        <span className="font-bold">{label}</span>
        <input
          {...field}
          {...props}
          className={
            meta.touched && meta.error
              ? "text-red-500"
              : "w-full border-[1px] border-[#BCBCBC] h-12 px-2 rounded my-2 focus:outline-none focus:border-2"
          }
        />
      </label>

      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
}
