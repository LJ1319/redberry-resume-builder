import * as yup from "yup";

// const anyReg = /^.{2,}$/;
const geoRegex = /^[ა-ჰ]{2,}$/;
// const multiReg = /^\w|[ა-ჰ]{2,}$/;
const geoPhoneRegex = /^\+(995)(\d{3}\d{2}\d{2}\d{2})$/;
const redberryEmailRegex = /^\w[\w.-]{0,25}@(redberry)\.ge$/;

export const personalInfoSchema = yup.object().shape({
  name: yup
    .string()
    // .min(2)
    .matches(geoRegex, {
      message: "მინიმუმ 2 სიმბოლო, მხოლოდ ქართული სიმბოლოები!",
    })
    .required("სავალდებულო!"),
  surname: yup
    .string()
    // .min(2)
    .matches(geoRegex, {
      message: "მინიმუმ 2 სიმბოლო, მხოლოდ ქართული სიმბოლოები!",
    })
    .required("სავალდებულო!"),
  image: yup.string().required("სავალდებულო!"),
  about_me: yup.string(),
  // .matches(geoRegex, { message: "მხოლოდ ქართული სიმბოლოები!" }),
  email: yup
    .string()
    .email()
    .matches(redberryEmailRegex, {
      message: "უნდა მთავრდებოდეს @redberry.ge-თი!",
    })
    .required("სავალდებულო!"),
  phone_number: yup
    .string()
    .matches(geoPhoneRegex, {
      message: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს!",
    })
    .required("სავალდებულო!"),
});

export const experienceInfoSchema = yup.object().shape({
  experiences: yup.array().of(
    yup.object().shape({
      position: yup
        .string()
        // .min(2)
        // .matches(multiReg, { message: "მინიმუმ 2 სიმბოლო!" })
        .required("სავალდებულო"),
      employer: yup
        .string()
        // .min(2)
        // .matches(multiReg, { message: "მინიმუმ 2 სიმბოლო!" })
        .required("სავალდებულო"),
      start_date: yup.date().required("სავალდებულო!"),
      due_date: yup.date().required("სავალდებულო!"),
      description: yup.string().required("სავალდებულო"),
    })
  ),
});

export const educationInfoSchema = yup.object().shape({
  educations: yup.array().of(
    yup.object().shape({
      institute: yup
        .string()
        // .min(2)
        // .matches(multiReg, { message: "მინიმუმ 2 სიმბოლო!" })
        .required("სავალდებულო"),
      degree: yup
        .string()
        // .min(2)
        .matches(geoRegex, {
          message: "მინიმუმ 2 სიმბოლო, მხოლოდ ქართული სიმბოლოები!",
        })
        .required("სავალდებულო"),
      due_date: yup.date().required("სავალდებულო!"),
      description: yup
        .string()
        // .matches(multiReg)
        .required("სავალდებულო"),
    })
  ),
});
