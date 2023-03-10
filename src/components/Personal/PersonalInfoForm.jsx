import { Form } from "formik";
import { useState } from "react";
import { useEffect } from "react";

import TextArea from "../layout/TextArea";
import TextInput from "../layout/TextInput";

import check from "../../assets/icons/check.svg";
import error from "../../assets/icons/error.svg";

export default function PersonalInfoForm({ saveForm, ...props }) {
  useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  const [image, setImage] = useState("");

  function handleImageUpload(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.addEventListener("load", () => {
      setImage(file);
      props.setFieldValue("image", reader.result);
    });
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    setImage(JSON.parse(localStorage.getItem("RESUME")).image);
  }, []);

  return (
    <Form>
      <div className="mx-44 my-8 flex w-max gap-16">
        <div className="w-96">
          <TextInput label="სახელი" name="name" placeholder="ანზორ" />
          <span className="text-sm text-[#2e2e2e]">
            მინიმუმ 2 ასო, ქართული ასოები
          </span>
        </div>

        <div className="ml-1.5 w-96">
          <TextInput label="გვარი" name="surname" placeholder="მუმლაძე" />
          <span className="text-sm text-[#2e2e2e]">
            მინიმუმ 2 ასო, ქართული ასოები
          </span>
        </div>
      </div>

      <div className="mx-44 my-8 flex">
        <label className="flex w-max cursor-pointer items-center text-center">
          <span className="text-lg font-bold">პირადი ფოტოს ატვირთვა</span>
          <div className="mx-4 h-8 w-28 rounded bg-[#0E80BF] p-1 text-sm text-white">
            ატვირთვა
            <input
              type="file"
              name="image"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </label>

        {image ? (
          <span className="mt-2">
            <img src={check} alt="success" />
          </span>
        ) : (
          <span className="mt-2">
            <img src={error} alt="error" />
          </span>
        )}
      </div>

      <div className="mx-44 my-8 w-9/12">
        <label>
          <span className="font-bold">ჩემ შესახებ (არასავალდებულო)</span>
          <TextArea name="about_me" placeholder="ზოგადი ინფო შენ შესახებ" />
        </label>
      </div>

      <div className="mx-44 my-8 w-9/12">
        <TextInput
          label="ელ.ფოსტა"
          name="email"
          placeholder="anzor666@redberry.ge"
        />
        <span className="text-sm text-[#2e2e2e]">
          უნდა მთავრდებოდეს @redberry.ge-ით
        </span>
      </div>

      <div className="mx-44 my-8 w-9/12">
        <TextInput
          label="მობილურის ნომერი"
          name="phone_number"
          placeholder="+995 551 12 34 56"
        />
        <span className="text-sm text-[#2e2e2e]">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </span>
      </div>

      <div className="mx-44 my-16 flex w-9/12 justify-end">
        <button
          type="submit"
          className="h-12 w-36 rounded bg-[#6B40E3] text-2xl text-white all-small-caps hover:bg-[#7949FF] active:bg-[#512FAF]"
        >
          შემდეგი
        </button>
      </div>
    </Form>
  );
}
