import { FaRocket } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaRocket />
        <span>PlacementPilot AI</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;