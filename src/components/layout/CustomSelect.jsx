import { useField } from "formik";
import { useEffect, useState, useRef } from "react";

import downarrow from "../../assets/icons/downarrow.svg";

export default function CustomSelect({ data, text, ...props }) {
  const [field, meta, helpers] = useField(props);
  const node = useRef();

  console.log(props);
  console.log(data);
  console.log(helpers);

  const [selected, setSelected] = useState("");
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
      className="relative flex justify-between my-12 w-full h-12 p-2.5 text-lg font-bold bg-[#EBEBEB] rounded-lg cursor-pointer"
    >
      {selected ? selected.title : text}
      <button type="button">
        <img src={downarrow} alt="down arrow" />
      </button>

      {open && (
        <ul className="absolute ml-[-10px] mt-10 z-10 w-full h-auto overflow-auto text-lg font-bold bg-white rounded-lg drop-shadow-2xl">
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
                selected.id === degree.id ? `bg-[#e7f0f8]` : ""
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
