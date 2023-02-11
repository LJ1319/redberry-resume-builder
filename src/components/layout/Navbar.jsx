import { Link } from "react-router-dom";
import backarrow from "../../assets/icons/backarrow.svg";

export default function Navbar({ title, titlesSize, index }) {
  return (
    <div className="flex h-32 items-center bg-[#F9F9F9] font-helvetica-neue text-[#1A1A1A] all-small-caps">
      <button className="mx-16 flex h-10 w-10 cursor-pointer items-center rounded-full bg-white">
        <Link to="/" className="flex w-full justify-center">
          <img src={backarrow} alt="backToHome" />
        </Link>
      </button>

      <div className="flex w-9/12 items-center justify-between border-b-[1px] border-[#1A1A1A] py-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-2xl">{`${index}/${titlesSize}`}</span>
      </div>
    </div>
  );
}
