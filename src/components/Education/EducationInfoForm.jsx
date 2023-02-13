import { FieldArray, Form } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "../../apis/degrees";
import DateInput from "../layout/DateInput";
import TextArea from "../layout/TextArea";
import TextInput from "../layout/TextInput";
import { useState } from "react";
import { useRef } from "react";

import downarrow from "../../assets/icons/downarrow.svg";
import CustomSelect from "../layout/CustomSelect";

export default function EducationInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  const [degrees, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/degrees",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // const node = useRef();

  // const [selected, setSelected] = useState("");
  // const [open, setOpen] = useState(false);

  // const show = () => {
  //   setOpen(!open);
  // };

  // const handleClick = (e) => {
  //   if (node.current.contains(e.target)) {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // const handleChange = (selectedValue) => {
  //   // console.log(selectedValue);
  //   setOpen(false);
  //   setSelected(selectedValue);
  //   // props.setFieldValue("degree", selectedValue);
  //   // console.log(props.values);
  //   // console.log(selected);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  // console.log(props);

  return (
    <Form>
      <div className="h-full bg-[#f9f9f9]">
        <FieldArray name="educations">
          {({ push }) => {
            return (
              <div className="w-9/12 mx-44 my-8 flex-col items-center justify-center content-center">
                {props.values.educations.length > 0 &&
                  props.values.educations.map((education, index) => (
                    <div
                      className="w-full my-8 border-b-[1px] pb-4 border-[#C1C1C1]"
                      key={index}
                    >
                      <div className="w-full my-8">
                        <TextInput
                          label="სასწავლებელი"
                          name={`educations.${index}.institute`}
                          type="text"
                          placeholder="სასწავლებელი"
                        />
                        <span className="text-sm text-[#2e2e2e]">
                          მინიმუმ 2 სიმბოლო
                        </span>
                      </div>

                      <div className="w-full h-max my-8 flex gap-16">
                        <div className="w-full">
                          {/* <div
                            ref={node}
                            onClick={show}
                            className={`relative flex justify-between py-2.5 text-[#909090] bg-white rounded cursor-pointer px-4 w-full border-[1px] h-12 my-8 focus:outline-none focus:border-2 border-[#BCBCBC] ${
                              selected.title
                                ? "text-[#1a1a1a] border-[#98E37E]"
                                : ""
                            }`}
                          >
                            {selected ? selected.title : "აირჩიეთ ხარისხი"}
                            <button type="button">
                              <img src={downarrow} alt="down arrow" />
                            </button>

                            {open && (
                              <ul className="absolute ml-[-18px] mt-10 z-10 w-full h-auto overflow-auto text-lg text-[#1a1a1a] font-bold bg-white rounded drop-shadow-2xl ">
                                {degrees.map((degree) => (
                                  <li
                                    name={`educations.${index}.degree`}
                                    key={degree.id}
                                    onClick={() => {
                                      handleChange(degree);
                                      // console.log(degree);
                                      // console.log(degree.id);
                                      // console.log(selected.id);
                                      // setSelected(degree);

                                      props.setFieldValue(
                                        `educations.${index}.degree`,
                                        degree
                                      );
                                      // setOpen(false);
                                    }}
                                    className={`${
                                      selected.id === degree.id
                                        ? `bg-[#c3dcee]`
                                        : ""
                                    } relative p-2.5 cursor-pointer hover:bg-[#e7f0f8]`}
                                  >
                                    <span className="font-normal text-left truncate">
                                      {degree.title}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div> */}

                          <CustomSelect
                            data={degrees}
                            text="აირჩიეთ ხარისხი"
                            name={`educations.${index}.degree`}
                          />
                        </div>
                        <div className="w-full">
                          <span className="font-bold">დამთავრების რიცხვი</span>
                          <DateInput
                            type="date"
                            name={`educations.${index}.due_date`}
                          />
                        </div>
                      </div>

                      <label>
                        <span className="font-bold">აღწერა</span>
                        <TextArea
                          name={`educations.${index}.description`}
                          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                        />
                      </label>
                    </div>
                  ))}
                <button
                  type="button"
                  className="w-72 bg-[#62A1EB] h-12 rounded text-white"
                  onClick={() =>
                    push({
                      institute: "",
                      degree: "",
                      due_date: "",
                      description: "",
                    })
                  }
                >
                  სხვა სასწავლებლის დამატება
                </button>
              </div>
            );
          }}
        </FieldArray>

        {/* <button
          type="button"
          className="h-12 w-36 rounded bg-[#6B40E3] hover:bg-[#7949FF] active:bg-[#512FAF] text-2xl text-white all-small-caps"
          onClick={getData}
        >
          Get Degrees
        </button> */}

        <div className="mx-44 w-9/12 flex justify-between my-16">
          <button
            type="button"
            className="h-12 w-36 rounded bg-[#6B40E3] hover:bg-[#7949FF] active:bg-[#512FAF]"
          >
            <Link
              to="/build/experience"
              className="block h-full text-center p-1.5 font-helvetica-neue text-2xl text-white all-small-caps"
            >
              უკან
            </Link>
          </button>

          <button
            type="submit"
            className="h-12 w-36 rounded bg-[#6B40E3] hover:bg-[#7949FF] active:bg-[#512FAF] text-2xl text-white all-small-caps"
          >
            შემდეგი
          </button>
        </div>
      </div>
    </Form>
  );
}
