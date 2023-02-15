import { useField } from "formik";
import { useEffect, useState, useRef } from "react";

import downarrow from "../../assets/icons/downarrow.svg";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export default function CustomSelect({ data, text, ...props }) {
  const [field, meta, helpers] = useField(props);
  const node = useRef();

  const [selected, setSelected] = useLocalStorageState({
    key: field.name,
    value: false,
  });

  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setOpen(false);

    setSelected(selectedValue);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={node}
      onClick={show}
      className={`relative my-2 flex h-12  w-full cursor-pointer justify-between rounded border-[1px] bg-white py-2.5 px-4 focus:border-2 focus:outline-none ${
        selected.title
          ? "border-[#98E37E] text-[#1a1a1a]"
          : "border-[#BCBCBC] text-[#909090]"
      }`}
    >
      {selected ? selected.title : text}
      <button type="button">
        <img src={downarrow} alt="down arrow" />
      </button>

      {open && (
        <ul className="absolute z-10 -ml-4 mt-10 h-auto w-full overflow-auto rounded bg-white text-lg font-bold text-[#1a1a1a] drop-shadow-2xl">
          {data.map((degree) => (
            <li
              {...field}
              {...props}
              key={degree.id}
              onClick={() => {
                handleChange(degree);
                setOpen(false);
                helpers.setValue(degree);
              }}
              className={`${
                selected.id === degree.id ? `bg-[#C3DCEE]` : ""
              } relative cursor-pointer p-2.5 hover:bg-[#e7f0f8]`}
            >
              <span className="truncate text-left font-normal">
                {degree.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
