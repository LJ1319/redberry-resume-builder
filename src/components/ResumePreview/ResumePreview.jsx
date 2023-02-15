import { useState, useEffect } from "react";

import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import logo03 from "../../assets/img/logo03.png";

export default function ResumePreview({ initialValues, page }) {
  const [isPersonalVisited, setIsPersonalVisited] = useState(false);
  const [isExperienceVisited, setIsExperienceVisited] = useState(false);
  const [isEducationVisited, setIsEducationVisited] = useState(false);

  useEffect(() => {
    page === 0 && setIsPersonalVisited(true);
    page === 1 && setIsExperienceVisited(true);
    page === 2 && setIsEducationVisited(true);

    localStorage.setItem(
      "isExperienceVisited",
      JSON.stringify(isPersonalVisited)
    );

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
    setIsPersonalVisited(localStorage.getItem("isPersonalVisited"));
    setIsExperienceVisited(localStorage.getItem("isExperienceVisited"));
    setIsEducationVisited(localStorage.getItem("isExperienceVisited"));
  }, []);

  return (
    <div className="flex h-screen w-5/12 flex-col bg-white p-14">
      <div
        className={`flex h-max w-full justify-between pb-6 ${
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
            <div className="mt-4 flex items-center gap-2">
              <img src={email} alt="email" className="h-4 w-4" />
              <span>{initialValues.email}</span>
            </div>
          ) : null}

          {initialValues.phone_number !== "" ? (
            <div className="flex items-center gap-2">
              <img src={phone} alt="phone" className="h-4 w-4" />
              <span>
                {initialValues.phone_number.replace(
                  /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
                  "$1 $2 $3 $4 $5"
                )}
              </span>
            </div>
          ) : null}

          {initialValues.about_me !== "" ? (
            <div className="mt-4 flex flex-col">
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
        className={`flex h-max w-full flex-col justify-between pt-2 pb-6 ${
          isEducationVisited === true ? "border-b-[1px] border-[#C8C8C8]" : null
        }`}
      >
        {isExperienceVisited === true ? (
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            გამოცდილება
          </span>
        ) : null}

        {initialValues.experiences.map((experience, index) => (
          <div key={index} className="my-4 flex flex-col">
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

      <div className="flex h-full w-full flex-col justify-start pt-2 pb-6">
        {isEducationVisited === true ? (
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            განათლება
          </span>
        ) : null}

        {initialValues.educations.map((education, index) => (
          <div key={index} className="my-4 flex flex-col">
            <span className="font-bold">
              {education.institute
                ? education.institute.concat(
                    ", ",
                    education.degree.title ? education.degree.title : ""
                  )
                : education.degree.title}
            </span>

            <span className="italic text-[#909090]">{education.due_date}</span>
            <span className="mt-2">{education.description}</span>
          </div>
        ))}
      </div>

      <span className="my-auto h-max w-max">
        <img src={logo03} alt="redberry-logo" />
      </span>
    </div>
  );
}
