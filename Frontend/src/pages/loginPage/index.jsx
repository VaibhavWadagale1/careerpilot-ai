import {useState} from 'react'
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { Brand } from "../../components/common";
import "./index.css";
import {useNavigate, Link } from "react-router";
import Cookie from 'js-cookie'

const LoginPage = ({
  onLogin = () => {},
  onForgotPassword = () => {},
  
}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err,setErr] = useState(false)
  const [errMsg,setErrMsg] = useState('')

  const onLoginSuccessful = (jwt, user) =>{
      console.log("Login successful", jwt)
      Cookie.set('token', jwt, { expires: 1 });
      Cookie.set('user', JSON.stringify(user), { expires: 1 });
      navigate("/dashboard",{replace:true})
      
    }
  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const url = `${import.meta.env.VITE_API_URL}/login`
      const options ={
        method:"POST",
        headers: {
              "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
          
        })
      }
      const response = await fetch(url, options);
      const data = await response.json()
      if (!response.ok) {
        setErr(true);
        setErrMsg(data.message || "Invalid email or password");
        return;
      }

      if (!data.token) {
        setErr(true);
        setErrMsg("Login succeeded, but no token was received.");
        return;
      }
      else{
      onLoginSuccessful(data.token, data.user);
      }
  }catch (error) {
      setErr(true);
      setErrMsg("Unable to connect to the server. Please try again.");
    }
};

  return (
    <div className="login-page">
      {/* ================= LEFT SECTION ================= */}

      <section className="login-info">
        <div className="login-brand">
          <Brand />
        </div>

        <div className="login-info-content">
          <span className="login-eyebrow">
            <Sparkles size={15} />
            AI-POWERED CAREER ASSISTANT
          </span>

          <h1>
            Your next career move
            <em> starts here.</em>
          </h1>

          <p>
            Sign in to continue exploring opportunities,
            improving your resume and preparing for your
            next interview with CareerPilot AI.
          </p>

          <div className="login-benefits">
            <div>
              <span className="benefit-number">01</span>
              <div>
                <strong>Discover opportunities</strong>
                <p>Find relevant roles based on your profile.</p>
              </div>
            </div>

            <div>
              <span className="benefit-number">02</span>
              <div>
                <strong>Analyze your fit</strong>
                <p>Understand your skills and job requirements.</p>
              </div>
            </div>

            <div>
              <span className="benefit-number">03</span>
              <div>
                <strong>Prepare smarter</strong>
                <p>Practice interviews with AI-powered tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOGIN SECTION ================= */}

      <section className="login-form-section">
        <div className="login-card">
          <div className="login-heading">
            <span className="login-small-label">WELCOME BACK</span>

            <h2>Sign in to CareerPilot</h2>

            <p>
              Enter your details to access your career workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {/* EMAIL */}

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required 
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-button"
                  onClick={onForgotPassword}
                >
                  Forgot password?
                </button>
              </div>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
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
            </div>

            {/* REMEMBER ME */}


            {/* LOGIN BUTTON */}

            {err && (
              <div className="login-error">
                {errMsg}
              </div>
            )}

            <button type="submit" className="login-button">
              Sign in
              <ArrowRight size={17} />
            </button>

          </form>

          {/* DIVIDER */}

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          {/* GOOGLE BUTTON */}


          {/* REGISTER */}

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register" ><button
              type="button"
              className="register-button"
            >
              Create an account
            </button></Link>
          </p>

          <p className="login-security">
            Your information is securely stored and used only
            to personalize your CareerPilot experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;