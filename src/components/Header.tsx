import { Link } from "react-router";
import "./Header.css";
const Header = () => {
  return (
    <header className="">
      <div className="text-[48px] logo">aiyldz</div>
      <ul className="list">
        <li>
          <Link to={"/"} className="h-yazi">
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="h-yazi">
            Hakkımda
          </Link>
        </li>
        <li>
          <Link to={"/projects"} className="h-yazi">
            Projeler
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="h-yazi">
            İletişim
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
