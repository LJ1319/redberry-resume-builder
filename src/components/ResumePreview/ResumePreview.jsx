export default function ResumePreview({ initialValues }) {
  return (
    <div className="h-max w-5/12">
      <p>resume preview</p>
      <p>{initialValues.name}</p>
      <p>{initialValues.surname}</p>
      {initialValues.image ? (
        <img
          src={initialValues.image}
          alt="userImage"
          className="h-56 w-56 rounded-full text-center"
        />
      ) : null}
      {initialValues.experiences.map((experience, index) => (
        <div key={index}>
          <p>{experience.position}</p>
          <p>{experience.employer}</p>
          <p>{experience.start_date}</p>
          <p>{experience.due_date}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
