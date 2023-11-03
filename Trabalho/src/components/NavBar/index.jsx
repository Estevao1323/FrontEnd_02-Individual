import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Produtos">Produtos</Link>
        </li>
      </ul>
    </nav>
  );
}
