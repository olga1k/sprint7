import { Link } from "react-router-dom";

export default function SignUp({ user, logout }) {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="sm-wrapper">
      {!user?.email && (
        <ul>
          <li>
            <Link className="sm-item" to="/signup">
              SIGN UP
            </Link>
          </li>
        </ul>
      )}
      {user?.email && (
        <div>
          <p>
            Hello, <span>{user.email}</span>!
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}
