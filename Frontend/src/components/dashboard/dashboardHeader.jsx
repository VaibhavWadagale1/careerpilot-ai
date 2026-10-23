import { Bell, Search } from "lucide-react";
import { useState, useEffect } from "react";
import "./DashboardHeader.css";
import Cookie from "js-cookie";

const DashboardHeader = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setTimeOfDay("morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("evening");
    }
  }, []);

  const user = JSON.parse(Cookie.get("user") || "{}");
  const userName = user.name || "User";

  return (
    <header className="dashboard-header">
      <div className="dashboard-welcome">
        <h1>Good {timeOfDay}, {userName} 👋</h1>
        <p>Here is your career progress at a glance.</p>
      </div>

      <div className="dashboard-header-actions">
        <label className="dashboard-search">
          <Search size={18} />

          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search dashboard"
          />
        </label>

        <button
          type="button"
          className="dashboard-notification"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span />
        </button>

        <div className="dashboard-header-avatar">V</div>
      </div>
    </header>
  );
};

export default DashboardHeader;