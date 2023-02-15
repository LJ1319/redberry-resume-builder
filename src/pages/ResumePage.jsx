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

  console.log(isModalClosed);

  return (
    <div className="flex justify-evenly py-16 h-screen font-helvetica-neue">
      <button className="mx-16 flex h-10 w-10 cursor-pointer items-center rounded-full bg-[#F9F9F9]">
        <Link to="/" className="flex w-full justify-center">
          <img src={backarrow} alt="backToHome" />
        </Link>
      </button>

      <div className="flex flex-col w-5/12 p-14 h-full bg-white border-black border-[1px]">
        <div className="w-full h-max pb-6 flex justify-between border-b-[1px] border-[#C8C8C8]">
          <div className="flex flex-col">
            <span className="text-6xl font-bold text-redberry-red all-small-caps">
              {resumeData.name} {resumeData.surname}
            </span>

            {resumeData.email !== "" ? (
              <div className="flex items-center gap-2 mt-4">
                <img src={email} alt="email" className="w-4 h-4" />
                <span>{resumeData.email}</span>
              </div>
            ) : null}

            {resumeData.phone_number !== "" ? (
              <div className="flex items-center gap-2">
                <img src={phone} alt="phone" className="w-4 h-4" />
                <span>
                  {resumeData.phone_number.replace(
                    /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
                    "$1 $2 $3 $4 $5"
                  )}
                </span>
              </div>
            ) : null}

            {resumeData.about_me !== "" ? (
              <div className="flex flex-col mt-4">
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

        <div className="w-full h-max pt-2 pb-6 flex flex-col justify-between border-b-[1px] border-[#C8C8C8]">
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            გამოცდილება
          </span>
          {resumeData.experiences.map((experience, index) => (
            <div key={index} className="flex flex-col my-4">
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

        <div className="w-full h-full pt-2 pb-6 flex flex-col justify-start">
          <span className="text-2xl font-bold text-redberry-red all-small-caps">
            განათლება
          </span>
          {resumeData.educations.map((education, index) => (
            <div key={index} className="flex flex-col my-4">
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

        <span className="w-max h-max my-auto">
          <img src={logo03} alt="redberry-logo" />
        </span>
      </div>

      {isModalClosed ? (
        <div className="h-40 w-1/5 rounded-lg shadow-2xl p-8 flex justify-center items-center">
          <span className="text-2xl font-bold">
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </span>
          <img
            src={close}
            alt="close"
            className="w-3 h-3 relative -top-16 left-4 cursor-pointer"
            onClick={() => setIsModalClosed(!isModalClosed)}
          />
        </div>
      ) : null}
    </div>
  );
}
