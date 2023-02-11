// let number = "+995 598 11 08 49";
// let formattedResult = number.replace(/[^+\d]+/g, "");
// console.log(geoPhoneRegex.test(number));

import { Field, Form } from "formik";
import { useEffect } from "react";

export default function PersonalInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  const handleImageUpload = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.addEventListener("load", () => {
      props.setFieldValue("image", reader.result);
    });
    reader.readAsDataURL(file);
  };

  return (
    <Form>
      <div className="mx-44 my-16 flex gap-12">
        <label>
          სახელი
          <Field name="name" className="block w-80 border-2" />
        </label>
        <label>
          გვარი
          <Field name="surname" className="block w-80 border-2" />
        </label>
      </div>
      <div className="mx-44">
        <label className="flex w-max cursor-pointer items-center text-center">
          <span className="text-lg">პირადი ფოტოს ატვირთვა</span>
          <div className="mx-4 h-8 w-28 rounded bg-[#0E80BF] p-1 text-sm text-white">
            ატვირთვა
            <input
              id="image"
              type="file"
              name="image"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </label>
      </div>
    </Form>
  );
}
