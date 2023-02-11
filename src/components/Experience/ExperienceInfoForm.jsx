import { FieldArray, Form } from "formik";
import { useEffect } from "react";
import TextInput from "../layout/TextInput";

export default function ExperienceInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  return (
    <Form>
      <FieldArray name="experiences">
        {({ push }) => {
          return (
            <div>
              {props.values.experiences.length > 0 &&
                props.values.experiences.map((experience, index) => (
                  <div className="row" key={index}>
                    <TextInput
                      label="თანამდებობა"
                      name={`experiences.${index}.position`}
                      type="text"
                      placeholder="დეველოპერი, დიზაინერი, ა.შ"
                    />

                    <TextInput
                      label="დამსაქმებელი"
                      name={`experiences.${index}.employer`}
                      type="text"
                      placeholder="დამსაქმებელი"
                    />
                  </div>
                ))}
              <button
                type="button"
                className="secondary"
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
                Add Experience
              </button>

              {/* {typeof form.errors.friends === "string" ? (
                <div className="error">{form.errors.friends}</div>
              ) : null} */}
            </div>
          );
        }}
      </FieldArray>
    </Form>
  );
}
