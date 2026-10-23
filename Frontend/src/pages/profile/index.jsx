
import { useState } from "react";
import { UserRound, Mail, Phone, GraduationCap, MapPin, BriefcaseBusiness, Save } from "lucide-react";
import Navbar from "../../components/dashboard/Navbar.jsx";
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import "./index.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Vaibhav Wadagale",
    email: "",
    phone: "",
    location: "Pune, Maharashtra",
    education: "BE - Artificial Intelligence and Data Science",
    skills: "React.js, JavaScript, Node.js, Express.js, MongoDB",
    bio: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend-only for now.
    // Next, connect this handler to your backend profile API.
    setMessage("Changes are ready. Connect the profile API to save permanently.");
  };

  return (
    <div className="dashboard-layout">
        <Navbar />
      <div className="profile-container">
        <div classname="sidebar"><Sidebar /></div>
        <main className="dashboard-main profile-main">
        <div className="profile-content">
          <div className="profile-page-heading">
            <div>
              <h1>My Profile</h1>
              <p>Manage your personal information and career details.</p>
            </div>
          </div>

          <section className="profile-summary">
            <div className="profile-avatar">
              <UserRound size={34} />
              <button
  type="button"
  className="change-pic-btn"
  onClick={() => fileInputRef.current?.click()}
>
  Change Picture
</button>
            </div>

            <div className="profile-summary-info">
              <h2>{formData.name || "Your Name"}</h2>
              <p>{formData.email || "Add your email address"}</p>
              <span className="profile-role">
                <BriefcaseBusiness size={14} />
                Job Seeker
              </span>
            </div>
          </section>

          <form className="profile-form" onSubmit={handleSubmit}>
            <section className="profile-card">
              <div className="profile-card-heading">
                <UserRound size={20} />
                <div>
                  <h2>Personal Information</h2>
                  <p>Update your basic contact details.</p>
                </div>
              </div>

              <div className="profile-form-grid">
                <label className="profile-field">
                  Full Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label className="profile-field">
                  Email Address
                  <span className="profile-input-wrapper">
                    <Mail size={17} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </span>
                </label>

                <label className="profile-field">
                  Phone Number
                  <span className="profile-input-wrapper">
                    <Phone size={17} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </span>
                </label>

                <label className="profile-field">
                  Location
                  <span className="profile-input-wrapper">
                    <MapPin size={17} />
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                    />
                  </span>
                </label>
              </div>
            </section>

            <section className="profile-card">
              <div className="profile-card-heading">
                <GraduationCap size={21} />
                <div>
                  <h2>Career Information</h2>
                  <p>Help CareerPilot understand your career profile.</p>
                </div>
              </div>

              <div className="profile-form-grid">
                <label className="profile-field profile-full-width">
                  Education
                  <input
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="Your degree or qualification"
                  />
                </label>

                <label className="profile-field profile-full-width">
                  Technical Skills
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    rows={3}
                    placeholder="React.js, Node.js, MongoDB..."
                  />
                  <small>Separate your skills with commas.</small>
                </label>

                <label className="profile-field profile-full-width">
                  About Me
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write a short professional introduction..."
                  />
                </label>
              </div>
            </section>

            <div className="profile-form-footer">
              <p role="status">{message}</p>
              <button type="submit">
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
      </div>
      

      
    </div>
  );
};

export default Profile;
