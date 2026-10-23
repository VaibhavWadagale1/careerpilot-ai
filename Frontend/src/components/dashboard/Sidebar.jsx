import {
  LayoutDashboard,
  UserRound,
  BriefcaseBusiness,
  FileSearch,
  MessagesSquare,
  ClipboardList,
  Bookmark,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

import "./Sidebar.css";
import Cookie from "js-cookie";
const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "My Profile", icon: UserRound, path: "/profile" },
  { label: "Find Jobs", icon: BriefcaseBusiness, path: "/jobs" },
  { label: "Resume Analyzer", icon: FileSearch, path: "/resume-analyzer" },
  { label: "Interview Prep", icon: MessagesSquare, path: "/interview-prep" },
  { label: "Applications", icon: ClipboardList, path: "/applications" },
  { label: "Saved Jobs", icon: Bookmark, path: "/saved-jobs" },
];

const Sidebar = () => {
  const user = JSON.parse(Cookie.get("user"));
  return (
    <aside className="dashboard-sidebar">
      <p className="sidebar-section-label">WORKSPACE</p>
      <nav className="sidebar-navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === "Dashboard";

          return (
            <a
              key={item.label}
              href={item.path}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <a href="/settings" className="sidebar-link">
          <Settings size={19} />
          <span>Settings</span>
        </a>

        <div className="sidebar-user">
          <div className="sidebar-avatar">V</div>

          <div className="sidebar-user-info">
            <strong>{user.name}</strong>
            <span>Job Seeker</span>
          </div>

          <button
            type="button"
            className="sidebar-logout"
            aria-label="Log out"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;