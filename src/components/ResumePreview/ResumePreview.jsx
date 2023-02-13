import { useEffect } from "react";
import { useState } from "react";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import logo03 from "../../assets/img/logo03.png";

export default function ResumePreview({ initialValues, page }) {
  // console.log(initialValues);
  // let experience = false;
  // initialValues.experiences.map(
  //   (exp) => (experience = Object.values(exp).every((x) => x === ""))
  // );
  // console.log(experience);

  const [isPersonalVisited, setIsPersonalVisited] = useState(false);
  const [isExperienceVisited, setIsExperienceVisited] = useState(false);
  const [isEducationVisited, setIsEducationVisited] = useState(false);

  useEffect(() => {
    page === 0 && setIsPersonalVisited(true);
    page === 1 && setIsExperienceVisited(true);
    page === 2 && setIsEducationVisited(true);

    localStorage.setItem(
      "isExperienceVisited",
      JSON.stringify(isExperienceVisited)
    );
    localStorage.setItem(
      "isEducationVisited",
      JSON.stringify(isEducationVisited)
    );
  }, [page, isPersonalVisited, isExperienceVisited, isEducationVisited]);

  useEffect(() => {
    setIsPersonalVisited(localStorage.getItem("isExperienceVisited"));
    setIsExperienceVisited(localStorage.getItem("isExperienceVisited"));
    setIsEducationVisited(localStorage.getItem("isExperienceVisited"));
  }, []);

  return (
    <div className="flex flex-col h-screen w-5/12 p-14 bg-white">
      <div
        className={`w-full h-max pb-6 flex justify-between ${
          isExperienceVisited === true
            ? "border-b-[1px] border-[#C8C8C8]"
            : null
        }`}
      >
        <div className="flex flex-col">
          <span className="text-6xl font-bold text-redberry-red all-small-caps">
            {initialValues.name} {initialValues.surname}
          </span>

          {initialValues.email !== "" ? (
            <div className="flex items-center gap-2 mt-4">
              <img src={email} alt="email" className="w-4 h-4" />
              <span>{initialValues.email}</span>
            </div>
          ) : null}

          {initialValues.phone_number !== "" ? (
            <div className="flex items-center gap-2">
              <img src={phone} alt="phone" className="w-4 h-4" />
              <span>
                {initialValues.phone_number.replace(
                  /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
                  "$1 $2 $3 $4 $5"
                )}
              </span>
            </div>
          ) : null}

          {initialValues.about_me !== "" ? (
            <div className="flex flex-col mt-4">
              <span className="text-2xl font-bold text-redberry-red all-small-caps">
                ჩემ შესახებ
              </span>
              <span>{initialValues.about_me}</span>
            </div>
          ) : null}
        </div>

        {initialValues.image ? (
          <img
            src={initialValues.image}
            alt="userImage"
            className="h-56 w-56 rounded-full text-center"
          />
        ) : null}
      </div>

      <div
        className={`w-full h-max pt-2 pb-6 flex flex-col justify-between ${
          isEducationVisited === true ? "border-b-[1px] border-[#C8C8C8]" : null
        }`}
      >
        {isExperienceVisited === true ? (
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            გამოცდილება
          </span>
        ) : null}

        {initialValues.experiences.map((experience, index) => (
          <div key={index} className="flex flex-col my-4">
            <span className="font-bold">
              {experience.position
                ? experience.position.concat(", ", experience.employer)
                : experience.employer}
            </span>

            <span className="italic text-[#909090]">
              {experience.start_date
                ? experience.start_date.concat(" - ", experience.due_date)
                : experience.due_date}
            </span>

            <span className="mt-2">{experience.description}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full pt-2 pb-6 flex flex-col justify-between">
        {isEducationVisited === true ? (
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            განათლება
          </span>
        ) : null}

        {initialValues.educations.map((education, index) => (
          <div key={index} className="flex flex-col my-4">
            <span className="font-bold">
              {education.institute
                ? education.institute.concat(", ", education.degree)
                : education.degree}
            </span>

            <span className="italic text-[#909090]">{education.due_date}</span>
            <span className="mt-2">{education.description}</span>
          </div>
        ))}
      </div>

      <span className="w-max h-max my-auto">
        <img src={logo03} alt="redberry-logo" />
      </span>
    </div>
  );
}
