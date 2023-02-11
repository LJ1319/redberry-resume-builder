// let number = "+995 598 11 08 49";
// let formattedResult = number.replace(/[^+\d]+/g, "");
// console.log(geoPhoneRegex.test(number));

import { Form } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TextInput from "../layout/TextInput";

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
      <div className="mx-44 w-max my-8 flex gap-16">
        <div className="w-96">
          <TextInput label="სახელი" name="name" placeholder="ანზორ" />
          <span className="text-sm text-[#2e2e2e]">
            მინიმუმ 2 ასო, ქართული ასოები
          </span>
        </div>

        <div className="w-96">
          <TextInput label="გვარი" name="surname" placeholder="მუმლაძე" />
          <span className="text-sm text-[#2e2e2e]">
            მინიმუმ 2 ასო, ქართული ასოები
          </span>
        </div>
      </div>

      <div className="mx-44 my-8">
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
      </div>

      <div className="mx-44 w-9/12 my-8">
        <label>
          <span className="font-bold">ჩემ შესახებ(არასავალდებულო)</span>
          <textarea
            name="about_me"
            placeholder="ზოგადი ინფო შენ შესახებ"
            className="my-2 p-2 block w-full h-28 border-[1px] border-[#BCBCBC] rounded focus:outline-none focus:border-2"
            onChange={(e) => props.setFieldValue("about_me", e.target.value)}
          />
        </label>
      </div>

      <div className="mx-44 w-9/12 my-8">
        <TextInput
          label="ელ.ფოსტა"
          name="email"
          placeholder="anzor666@redberry.ge"
        />
        <span className="text-sm text-[#2e2e2e]">
          უნდა მთავრდებოდეს @redberry.ge-ით
        </span>
      </div>

      <div className="mx-44 w-9/12 my-8">
        <TextInput
          label="მობილურის ნომერი"
          name="phone_number"
          placeholder="+995 551 12 34 56"
        />
        <span className="text-sm text-[#2e2e2e]">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </span>
      </div>

      <div className="mx-44 w-9/12 flex justify-end my-16">
        <button className="h-12 w-36 rounded bg-[#6B40E3]">
          <Link
            to="experience"
            className="block h-full text-center p-1 font-helvetica-neue text-2xl text-white all-small-caps"
          >
            შემდეგი
          </Link>
        </button>
      </div>
    </Form>
  );
}
