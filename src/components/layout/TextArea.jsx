import { useField } from "formik";

export default function TextArea({ label, ...props }) {
  const [field] = useField(props);

  return (
    <div>
      <label>
        <span className="font-bold">{label}</span>
        <textarea
          {...field}
          {...props}
          className="my-2 p-4 block w-full h-28 border-[1px] border-[#BCBCBC] rounded focus:outline-none focus:border-2"
        />
      </label>
    </div>
  );
}
