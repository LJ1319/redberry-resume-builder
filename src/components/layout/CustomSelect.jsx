import { useField } from "formik";
import { useEffect, useState, useRef } from "react";

import downarrow from "../../assets/icons/downarrow.svg";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export default function CustomSelect({ data, text, ...props }) {
  const [field, meta, helpers] = useField(props);
  const node = useRef();

  const [selected, setSelected] = useLocalStorageState({
    key: "SELECTED",
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
      className={`relative flex justify-between py-2.5  bg-white rounded cursor-pointer px-4 w-full border-[1px] h-12 my-8 focus:outline-none focus:border-2 ${
        selected.title
          ? "text-[#1a1a1a] border-[#98E37E]"
          : "border-[#BCBCBC] text-[#909090]"
      }`}
    >
      {selected ? selected.title : text}
      <button type="button">
        <img src={downarrow} alt="down arrow" />
      </button>

      {open && (
        <ul className="absolute ml-[-18px] mt-10 z-10 w-full h-auto overflow-auto text-lg text-[#1a1a1a] font-bold bg-white rounded drop-shadow-2xl">
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
              } relative p-2.5 cursor-pointer hover:bg-[#e7f0f8]`}
            >
              <span className="font-normal text-left truncate">
                {degree.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
