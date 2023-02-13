import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import logo03 from "../../assets/img/logo03.png";

export default function ResumePreview({ initialValues, page }) {
  // console.log(initialValues.experiences);

  return (
    <div className="flex flex-col h-screen w-5/12 p-14 bg-white">
      <div
        className={`w-full h-max pb-6 flex justify-between ${
          page > 0 ? "border-b-[1px] border-[#C8C8C8]" : null
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
        className={`w-full h-max pb-6 flex justify-between ${
          page > 1 ? "border-b-[1px] border-[#C8C8C8]" : null
        }`}
      >
        {initialValues.experiences.map((experience, index) => (
          <div key={index}>
            <span>{experience.position}</span>
            <span>{experience.employer}</span>
            <span>{experience.start_date}</span>
            <span>{experience.due_date}</span>
            <span>{experience.description}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full pb-6 flex justify-between">
        {initialValues.educations.map((education, index) => (
          <div key={index}>
            <span>{education.institute}</span>
            <span>{education.degree}</span>
            <span>{education.due_date}</span>
            <span>{education.description}</span>
          </div>
        ))}
      </div>

      <span className="w-max h-max my-auto">
        <img src={logo03} alt="redberry-logo" />
      </span>
    </div>
  );
}
