import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
function Nav() {
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </Link>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat text-slate-gray text-lg leading-norma"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="logo" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
