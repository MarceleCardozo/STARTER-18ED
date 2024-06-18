import { Link } from "react-router-dom";
import navegation from "../../config/navegation";
import NavbarStyled from "./NavbarStyled";

function Navbar() {
  return (
    <>
      <NavbarStyled>
        {navegation.map((item) => (
          <div>
            <Link to={item.url}>{item.label}</Link>
          </div>
        ))}
      </NavbarStyled>
    </>
  );
}

export default Navbar;
