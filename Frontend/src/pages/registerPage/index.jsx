import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

import Brand from "../../components/common/Brand.jsx";
import "./index.css";

const Register = ({ theme = "light" }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [err,setErr] = useState(false)
  const [errMsg,setErrMsg] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrMsg("");
  };


  const getPasswordStrength = () => {
    const password = formData.password;

    if (!password) {
      return {
        label: "",
        width: "0%",
        className: "",
      };
    }

    if (password.length < 6) {
      return {
        label: "Weak",
        width: "33%",
        className: "weak",
      };
    }

    if (
      password.length >= 6 &&
      password.length < 10
    ) {
      return {
        label: "Moderate",
        width: "66%",
        className: "moderate",
      };
    }

    return {
      label: "Strong",
      width: "100%",
      className: "strong",
    };
  };

  const passwordStrength = getPasswordStrength();

  
const handleSubmit = async (event) => {
  event.preventDefault();

  setErr(false);
  setErrMsg("");

  if (!formData.name.trim()) {
    setErr(true);
    setErrMsg("Please enter your full name.");
    return;
  }

  if (!formData.email.trim()) {
    setErr(true);
    setErrMsg("Please enter your email address.");
    return;
  }

  if (!formData.password) {
    setErr(true);
    setErrMsg("Please enter a password.");
    return;
  }

  if (formData.password.length < 6) {
    setErr(true);
    setErrMsg("Password must contain at least 6 characters.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setErr(true);
    setErrMsg("Passwords do not match.");
    return;
  }

  if (!agreeTerms) {
    setErr(true);
    setErrMsg("Please accept the Terms and Conditions.");
    return;
  }

  try {
    setLoading(true);

    const url = `${import.meta.env.VITE_API_URL}/register`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: formData.role,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErr(true);
      setErrMsg(data.message || "Registration failed.");
      return;
    }

    navigate("/login");
  } catch (error) {
    setErr(true);
    setErrMsg("Unable to connect to the server. Please try again.");
    console.error("Registration error:", error);
  } finally {
    setLoading(false);
  }
};

  

  const handleGoogleRegister = () => {
    window.location.href =
      "http://localhost:30000/auth/google";
  };

  return (
    <div className={`register-page ${theme}`}>
      {/* Left Section */}
      <section className="register-showcase">
        <div className="showcase-background"></div>

        <div className="showcase-content">
          <Brand />

          <div className="showcase-main">
            <div className="showcase-badge">
              <Sparkles size={16} />
              <span>Build your career smarter</span>
            </div>

            <h1>
              Start your journey
              <span> with CareerPilot AI.</span>
            </h1>

            <p>
              Create your account and unlock AI-powered tools
              designed to help you discover jobs, improve your
              resume, and prepare for interviews.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Check size={17} />
                </div>

                <div>
                  <h3>AI-Powered Career Tools</h3>
                  <p>
                    Get personalized career assistance in one
                    platform.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Check size={17} />
                </div>

                <div>
                  <h3>Resume & Job Analysis</h3>
                  <p>
                    Understand how well your profile matches
                    job opportunities.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Check size={17} />
                </div>

                <div>
                  <h3>Interview Preparation</h3>
                  <p>
                    Practice interviews and improve your
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-footer">
            <span>CareerPilot AI</span>
            <span>•</span>
            <span>AI-powered career platform</span>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="register-section">
        <div className="register-container">
          <div className="mobile-brand">
            <Brand />
          </div>

          <div className="register-header">
            <div className="header-icon">
              <User size={22} />
            </div>

            <h2>Create your account</h2>

            <p>
              Join CareerPilot AI and take control of your
              career journey.
            </p>
          </div>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full name
              </label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(event) =>
                        setFormData((prev) => ({
                        ...prev,
                        name: event.target.value,
                        }))}
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(event) =>setFormData((prev) =>({...prev,email:event.target.value}))}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Role */}
            <div className="form-group">
              <label htmlFor="role">
                Account type
              </label>

              <div className="role-options">
                <label
                  className={`role-card ${
                    formData.role === "user"
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                  />

                  <div className="role-content">
                    <User size={18} />

                    <div>
                      <strong>Job Seeker</strong>
                      <span>
                        Find jobs and improve your career
                      </span>
                    </div>
                  </div>

                  <div className="radio-indicator"></div>
                </label>

                <label
                  className={`role-card ${
                    formData.role === "admin"
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                  />

                  <div className="role-content">
                    <ShieldCheck size={18} />

                    <div>
                      <strong>Administrator</strong>
                      <span>
                        Manage platform resources
                      </span>
                    </div>
                  </div>

                  <div className="radio-indicator"></div>
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Password strength */}
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-track">
                    <div
                      className={`strength-bar ${passwordStrength.className}`}
                      style={{
                        width: passwordStrength.width,
                      }}
                    ></div>
                  </div>

                  <span
                    className={`strength-text ${passwordStrength.className}`}
                  >
                    {passwordStrength.label}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms-row">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(event) =>
                  setAgreeTerms(event.target.checked)
                }
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="inline-link"
                >
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="inline-link"
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            {/* Error */}
            {err && (
              <div className="login-error">
                {errMsg}
              </div>
            )}

            {/* Register button */}
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              <span>
                {loading
                  ? "Creating account..."
                  : "Create account"}
              </span>

              {!loading && <ArrowRight size={18} />}
            </button>

            {/* Divider */}
            <div className="divider">
              <span></span>
              <p>or continue with</p>
              <span></span>
            </div>
          </form>

          {/* Login */}
          <div className="login-link">
            <span>Already have an account?</span>

            <Link to="/login">
              Sign in
            </Link>
          </div>

          <p className="security-note">
            <LockKeyhole size={14} />
            Your information is securely protected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;