export default function ResumePreview({ name, lastName, image }) {
  return (
    <div className="h-max w-5/12">
      <p>resume preview</p>
      <p>{name}</p>
      <p>{lastName}</p>
      {image ? (
        <img
          src={image}
          alt="userImage"
          className="h-56 w-56 rounded-full text-center"
        />
      ) : null}
    </div>
  );
}
