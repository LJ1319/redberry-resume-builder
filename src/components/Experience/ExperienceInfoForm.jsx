import { FieldArray, Form, useField } from "formik";
import { useEffect } from "react";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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
                    <MyTextInput
                      label="თანამდებობა"
                      name={`experiences.${index}.position`}
                      type="text"
                      placeholder="დეველოპერი, დიზაინერი, ა.შ"
                    />

                    <MyTextInput
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
