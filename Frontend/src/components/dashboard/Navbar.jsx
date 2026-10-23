import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Search, ChevronDown, UserRound, LogOut,Sparkles } from "lucide-react";
import Cookie from "js-cookie";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(Cookie.get("user") || "{}");
  const userName = user.name || "User";
  console.log("User from cookie:", user);


  const initial = userName.trim().charAt(0).toUpperCase() || "U";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    Cookie.remove("token");
    Cookie.remove("user");
    setIsDropdownOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="app-navbar">
        <div className="sidebar-brand">
            <div className="sidebar-brand-icon">
            <Sparkles size={23} />
            </div>

            <div>
            <h2>CareerPilot</h2>
            <span>AI CAREER PLATFORM</span>
            </div>
        </div>
    

      {/* User profile dropdown */}
      <div className="navbar-user-wrapper" ref={dropdownRef}>
        <button
          type="button"
          className="navbar-user-button"
          onClick={() => setIsDropdownOpen((previous) => !previous)}
          aria-expanded={isDropdownOpen}
          aria-haspopup="menu"
          aria-label="Open profile menu"
        >
          <span className="navbar-user-avatar">{initial}</span>
          <span className="navbar-user-name">{userName}</span>
          <ChevronDown
            size={16}
            className={isDropdownOpen ? "navbar-chevron rotated" : "navbar-chevron"}
          />
        </button>

        {isDropdownOpen && (
          <div className="navbar-dropdown" role="menu">
            <div className="navbar-dropdown-user">
              <span className="navbar-user-avatar">{initial}</span>
              <div className="navbar-dropdown-user-info">
                <strong>{userName}</strong>
                <span>CareerPilot account</span>
              </div>
            </div>

            <div className="navbar-dropdown-divider" />

            <Link
              to="/profile"
              className="navbar-dropdown-item"
              role="menuitem"
              onClick={() => setIsDropdownOpen(false)}
            >
              <UserRound size={17} />
              <span>My Profile</span>
            </Link>

            <button
              type="button"
              className="navbar-dropdown-item navbar-logout-item"
              role="menuitem"
              onClick={handleLogout}
            >
              <LogOut size={17} />
              <span>Log out</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;