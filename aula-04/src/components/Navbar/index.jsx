import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.google.com" target="_blank">
            Google
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
