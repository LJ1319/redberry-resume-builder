import { FieldArray, Form } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import DateInput from "../layout/DateInput";
import TextArea from "../layout/TextArea";
import TextInput from "../layout/TextInput";

import CustomSelect from "../layout/CustomSelect";

export default function EducationInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  return (
    <Form>
      <div className="h-full bg-[#f9f9f9]">
        <FieldArray name="educations">
          {({ push }) => {
            return (
              <div className="mx-44 my-8 w-9/12 flex-col content-center items-center justify-center">
                {props.values.educations.length > 0 &&
                  props.values.educations.map((education, index) => (
                    <div
                      className="my-8 w-full border-b-[1px] border-[#C1C1C1] pb-4"
                      key={index}
                    >
                      <div className="my-8 w-full">
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

                      <div className="my-8 flex h-max w-full gap-16">
                        <div className="w-full">
                          <span className="font-bold">ხარისხი</span>
                          <CustomSelect
                            data={props.degrees}
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
                  className="h-12 w-72 rounded bg-[#62A1EB] text-white"
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

        <div className="mx-44 my-16 flex w-9/12 justify-between">
          <button
            type="button"
            className="h-12 w-36 rounded bg-[#6B40E3] hover:bg-[#7949FF] active:bg-[#512FAF]"
          >
            <Link
              to="/build/experience"
              className="block h-full p-1.5 text-center font-helvetica-neue text-2xl text-white all-small-caps"
            >
              უკან
            </Link>
          </button>

          <button
            type="submit"
            className="h-12 w-36 rounded bg-[#6B40E3] text-2xl text-white all-small-caps hover:bg-[#7949FF] active:bg-[#512FAF]"
          >
            დასრულება
          </button>
        </div>
      </div>
    </Form>
  );
}
