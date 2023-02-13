import { FieldArray, Form } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DateInput from "../layout/DateInput";
import TextArea from "../layout/TextArea";
import TextInput from "../layout/TextInput";

export default function EducationInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

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
                          <TextInput
                            label="ხარისხი"
                            name={`educations.${index}.degree`}
                            type="text"
                            placeholder="აირჩიეთ ხარისხი"
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

        <div className="mx-44 w-9/12 flex justify-between my-16">
          <button
            type="button"
            className="h-12 w-36 rounded bg-[#6B40E3] hover:bg-[#7949FF] active:bg-[#512FAF]"
          >
            <Link
              to="/build"
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
