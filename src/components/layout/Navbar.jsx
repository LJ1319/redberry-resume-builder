import { Link } from "react-router-dom";
import backarrow from "../../assets/icons/backarrow.svg";

export default function Navbar({ title, titlesSize, index }) {
  return (
    <div className="font-helvetica-neue text-3xl text-black all-small-caps">
      <button>
        <Link to="/">
          <img src={backarrow} alt="" />
        </Link>
      </button>
      <h1>{title}</h1>
      <span>{`${index} / ${titlesSize}`}</span>
    </div>
  );
}
