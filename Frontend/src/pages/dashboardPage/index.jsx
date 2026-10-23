
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import DashboardHeader from "../../components/dashboard/dashboardHeader.jsx";
import OverviewCards from "../../components/dashboard/OverviewCards.jsx";
import Navbar from "../../components/dashboard/Navbar.jsx";

import {
  ArrowUpRight,
  FileSearch,
  BriefcaseBusiness,
  MessagesSquare,
  UserRound,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import "./index.css";

const recentApplications = [
  {
    role: "Frontend Developer",
    company: "TechNova",
    status: "Interview",
    date: "Oct 08, 2026",
  },
  {
    role: "MERN Stack Developer",
    company: "CodeCraft",
    status: "Under Review",
    date: "Oct 06, 2026",
  },
  {
    role: "React Developer",
    company: "BrightLabs",
    status: "Applied",
    date: "Oct 04, 2026",
  },
];

const quickActions = [
  {
    title: "Analyze Resume",
    description: "Improve your ATS score",
    icon: FileSearch,
    path: "/resume-analyzer",
    color: "green",
  },
  {
    title: "Explore Jobs",
    description: "Find matching opportunities",
    icon: BriefcaseBusiness,
    path: "/jobs",
    color: "blue",
  },
  {
    title: "Practice Interview",
    description: "Prepare with AI assistance",
    icon: MessagesSquare,
    path: "/interview-prep",
    color: "purple",
  },
  {
    title: "Complete Profile",
    description: "Highlight your skills",
    icon: UserRound,
    path: "/profile",
    color: "orange",
  },
];

const DashboardPage = () => {
  return (
    <div className="dashboard-layout">
      {/* Common top navigation */}
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-main">
            <DashboardHeader />

        <div className="dashboard-content">
          {/* Overview statistics */}
          <OverviewCards />

          {/* Resume Strength and Quick Actions */}
          <div className="dashboard-middle-grid">
            <section className="dashboard-panel resume-panel">
              <div className="panel-heading">
                <div>
                  <h2>Resume Strength</h2>
                  <p>Your latest resume analysis</p>
                </div>

                <span className="panel-heading-icon">
                  <FileSearch size={19} />
                </span>
              </div>

              <div className="resume-score-row">
                <div className="resume-score">
                  <strong>86</strong>
                  <span>/100</span>
                </div>

                <div>
                  <span className="resume-status">
                    <CheckCircle2 size={15} />
                    Strong profile
                  </span>

                  <p className="resume-description">
                    Your resume is looking good. A few improvements
                    could make it even stronger.
                  </p>
                </div>
              </div>

              <div className="resume-progress-track">
                <div className="resume-progress-fill" />
              </div>

              <div className="resume-progress-labels">
                <span>ATS compatibility</span>
                <strong>86%</strong>
              </div>

              <a className="panel-action" href="/resume-analyzer">
                View detailed analysis
                <ArrowUpRight size={17} />
              </a>
            </section>

            <section className="dashboard-panel quick-panel">
              <div className="panel-heading">
                <div>
                  <h2>Quick Actions</h2>
                  <p>What would you like to do today?</p>
                </div>
              </div>

              <div className="quick-actions-grid">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <a
                      href={action.path}
                      className="quick-action"
                      key={action.title}
                    >
                      <span
                        className={`quick-action-icon ${action.color}`}
                      >
                        <Icon size={20} />
                      </span>

                      <span className="quick-action-text">
                        <strong>{action.title}</strong>
                        <small>{action.description}</small>
                      </span>

                      <ArrowUpRight
                        className="quick-action-arrow"
                        size={16}
                      />
                    </a>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Recent job applications */}
          <section className="dashboard-panel applications-panel">
            <div className="panel-heading applications-heading">
              <div>
                <h2>Recent Applications</h2>
                <p>Keep track of your job search progress.</p>
              </div>

              <a href="/applications" className="view-all-link">
                View all
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="applications-table-wrapper">
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>POSITION</th>
                    <th>COMPANY</th>
                    <th>STATUS</th>
                    <th>APPLIED DATE</th>
                  </tr>
                </thead>

                <tbody>
                  {recentApplications.map((application) => (
                    <tr key={application.role}>
                      <td className="application-role">
                        {application.role}
                      </td>

                      <td>{application.company}</td>

                      <td>
                        <span
                          className={`application-status ${application.status
                            .toLowerCase()
                            .replaceAll(" ", "-")}`}
                        >
                          {application.status === "Interview" ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <Clock3 size={14} />
                          )}

                          {application.status}
                        </span>
                      </td>

                      <td>{application.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dashboard footer */}
          <footer className="dashboard-footer">
            <span>CareerPilot AI</span>
            <span>Your next opportunity starts with one step.</span>
          </footer>
        </div>
        </main>
      </div>

      {/* Common sidebar */}
      

      {/* Main dashboard content */}
      
    </div>
  );
};

export default DashboardPage;
