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
    </div>
  );
}
