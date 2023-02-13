import { FieldArray, Form } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import DateInput from "../layout/DateInput";
import TextArea from "../layout/TextArea";
import TextInput from "../layout/TextInput";

export default function ExperienceInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  // console.log(props);

  // const [startDate, setStartDate] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // useEffect(() => {
  //   setStartDate(
  //     JSON.parse(localStorage.getItem("RESUME")).experiences.start_date
  //   );
  // }, []);

  return (
    <Form>
      <div className="h-full bg-[#f9f9f9]">
        <FieldArray name="experiences">
          {({ push }) => {
            return (
              <div className="w-9/12 mx-44 my-8 flex-col items-center justify-center content-center">
                {props.values.experiences.length > 0 &&
                  props.values.experiences.map((experience, index) => (
                    <div className="w-full my-8" key={index}>
                      <div className="w-full my-8">
                        <TextInput
                          label="თანამდებობა"
                          name={`experiences.${index}.position`}
                          type="text"
                          placeholder="დეველოპერი, დიზაინერი, ა.შ"
                        />
                        <span className="text-sm text-[#2e2e2e]">
                          მინიმუმ 2 სიმბოლო
                        </span>
                      </div>

                      <div className="w-full">
                        <TextInput
                          label="დამსაქმებელი"
                          name={`experiences.${index}.employer`}
                          type="text"
                          placeholder="დამსაქმებელი"
                        />
                        <span className="text-sm text-[#2e2e2e]">
                          მინიმუმ 2 სიმბოლო
                        </span>
                      </div>

                      <div className="w-full h-max my-8 flex gap-16">
                        <div className="w-full">
                          <span className="font-bold">დაწყების რიცხვი</span>
                          <DateInput
                            type="date"
                            name={`experiences.${index}.start_date`}
                          />
                        </div>

                        <div className="w-full">
                          <span className="font-bold">დამთავრების რიცხვი</span>
                          <DateInput
                            type="date"
                            name={`experiences.${index}.due_date`}
                          />
                        </div>
                      </div>

                      <label>
                        <span className="font-bold">აღწერა</span>
                        <TextArea
                          name={`experiences.${index}.description`}
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
                      position: "",
                      employer: "",
                      start_date: "",
                      due_date: "",
                      description: "",
                    })
                  }
                >
                  მეტი გამოცდილების დამატება
                </button>
                {/* {typeof form.errors.educations === "string" ? (
                  <div className="error">{form.errors.educations}</div>
                ) : null} */}
              </div>
            );
          }}
        </FieldArray>
      </div>
    </Form>
  );
}
