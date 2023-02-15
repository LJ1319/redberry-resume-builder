import { useNavigate } from "react-router-dom";
import logo03 from "../assets/img/logo03.png";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col items-center font-helvetica-neue">
      <div className="m-auto flex h-44 w-1/5 flex-col content-center items-center rounded-lg p-8 text-center shadow-2xl">
        <span className="text-2xl font-bold">ასეთი გვერდი ვერ მოიძებნა</span>
        <button
          className="mt-4 h-16 w-32 rounded-lg bg-[#1A1A1A] text-lg text-white all-small-caps"
          onClick={() => navigate(-1)}
        >
          უკან დაბრუნება
        </button>
      </div>

      <div className="my-auto h-max w-max">
        <img src={logo03} alt="redberry-logo" />
      </div>
    </div>
  );
}
