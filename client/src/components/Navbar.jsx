import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaRocket
          style={{
            color: "#B67B4D",
          }}
        />

        <span>PlacementPilot AI</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <Link
            to="/login"
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "1px solid #E6D5C3",
            }}
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/register"
            style={{
              background: "#B67B4D",
              color: "white",
              padding: "10px 18px",
              borderRadius: "10px",
            }}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;