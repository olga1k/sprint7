import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link className="nav-item" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/main">
            STARSHIPS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
