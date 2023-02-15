import { useState, useEffect, useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

import { Link } from "react-router-dom";

import backarrow from "../assets/icons/backarrow.svg";
import close from "../assets/icons/close.svg";

import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";
import logo03 from "../assets/img/logo03.png";

export default function ResumePage() {
  const { resumeData } = useContext(ResumeContext);

  const [isModalClosed, setIsModalClosed] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="flex h-screen justify-evenly py-16 font-helvetica-neue">
      <button className="mx-16 flex h-10 w-10 cursor-pointer items-center rounded-full bg-[#F9F9F9]">
        <Link to="/" className="flex w-full justify-center">
          <img src={backarrow} alt="backToHome" />
        </Link>
      </button>

      <div className="flex h-full w-5/12 flex-col border-[1px] border-black bg-white p-14">
        <div className="flex h-max w-full justify-between border-b-[1px] border-[#C8C8C8] pb-6">
          <div className="flex flex-col">
            <span className="text-6xl font-bold text-redberry-red all-small-caps">
              {resumeData.name} {resumeData.surname}
            </span>

            {resumeData.email !== "" ? (
              <div className="mt-4 flex items-center gap-2">
                <img src={email} alt="email" className="h-4 w-4" />
                <span>{resumeData.email}</span>
              </div>
            ) : null}

            {resumeData.phone_number !== "" ? (
              <div className="flex items-center gap-2">
                <img src={phone} alt="phone" className="h-4 w-4" />
                <span>
                  {resumeData.phone_number.replace(
                    /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
                    "$1 $2 $3 $4 $5"
                  )}
                </span>
              </div>
            ) : null}

            {resumeData.about_me !== "" ? (
              <div className="mt-4 flex flex-col">
                <span className="text-2xl font-bold text-redberry-red all-small-caps">
                  ჩემ შესახებ
                </span>
                <span>{resumeData.about_me}</span>
              </div>
            ) : null}
          </div>

          {resumeData.image ? (
            <img
              src={`https://resume.redberryinternship.ge/${resumeData.image}`}
              alt="userImage"
              className="h-56 w-56 rounded-full text-center"
            />
          ) : null}
        </div>

        <div className="flex h-max w-full flex-col justify-between border-b-[1px] border-[#C8C8C8] pt-2 pb-6">
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            გამოცდილება
          </span>
          {resumeData.experiences.map((experience, index) => (
            <div key={index} className="my-4 flex flex-col">
              <span className="font-bold">
                {experience.position.concat(", ", experience.employer)}
              </span>

              <span className="italic text-[#909090]">
                {experience.start_date.concat(" - ", experience.due_date)}
              </span>

              <span className="mt-2">{experience.description}</span>
            </div>
          ))}
        </div>

        <div className="flex h-full w-full flex-col justify-start pt-2 pb-6">
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            განათლება
          </span>
          {resumeData.educations.map((education, index) => (
            <div key={index} className="my-4 flex flex-col">
              <span className="font-bold">
                {(education.institute.concat(", "), education.degree)}
              </span>

              <span className="italic text-[#909090]">
                {education.due_date}
              </span>

              <span className="mt-2">{education.description}</span>
            </div>
          ))}
        </div>

        <span className="my-auto h-max w-max">
          <img src={logo03} alt="redberry-logo" />
        </span>
      </div>

      {isModalClosed ? (
        <div className="flex h-40 w-1/5 items-center justify-center rounded-lg p-8 shadow-2xl">
          <span className="text-2xl font-bold">
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </span>
          <img
            src={close}
            alt="close"
            className="relative -top-16 left-4 h-3 w-3 cursor-pointer"
            onClick={() => setIsModalClosed(!isModalClosed)}
          />
        </div>
      ) : null}
    </div>
  );
}
