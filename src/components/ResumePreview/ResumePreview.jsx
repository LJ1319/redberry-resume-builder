export default function ResumePreview({ name, lastName, image }) {
  return (
    <div>
      <p>resume preview</p>
      <p>{name}</p>
      <p>{lastName}</p>
      <img src={image} alt="" />
    </div>
  );
}
