import { Link } from "react-router-dom";
import logo01 from "../assets/img/logo01.png";
import logo02 from "../assets/img/logo02.png";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-home-hero bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-11/12 border-b-[1px] border-black py-6">
        <img src={logo01} alt="redberry" />
      </div>
      <div className="my-96 mx-auto flex w-11/12 flex-col items-center">
        <img
          src={logo02}
          alt="redberry-transformation-agency"
          className="absolute left-[1065px] top-[430px]"
        />
        <button className="z-10 h-16 w-3/12 rounded-lg  bg-black text-center font-helvetica-neue text-3xl text-white all-small-caps">
          <Link to="build">რეზიუმეს დამატება</Link>
        </button>
      </div>
    </div>
  );
}
