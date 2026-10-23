import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  FileSearch,
  GraduationCap,
  LineChart,
  Sparkles,
  Target,
} from "lucide-react";

import { Brand, ThemeButton } from "../../components/common";

import {Link, useNavigate} from 'react-router'

import "./index.css";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Discover real opportunities",
    text: "Search jobs from supported job sources in one focused workspace instead of jumping between tabs.",
  },
  {
    icon: BrainCircuit,
    title: "Understand your fit",
    text: "Compare your profile and resume with a job description and see matched skills, gaps and keywords.",
  },
  {
    icon: FileSearch,
    title: "Improve your resume",
    text: "Upload your PDF resume and turn AI feedback into practical improvements for your target roles.",
  },
  {
    icon: Target,
    title: "Prepare for interviews",
    text: "Generate role-specific questions, practice answers and get structured feedback.",
  },
  {
    icon: LineChart,
    title: "Track your progress",
    text: "Keep applications, interviews and career activity organized in one personal dashboard.",
  },
  {
    icon: GraduationCap,
    title: "Build a preparation plan",
    text: "Turn recurring skill gaps into a focused learning and interview-preparation roadmap.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Create your profile",
    text: "Add your target roles, skills, locations and career goals.",
  },
  {
    number: "02",
    title: "Explore opportunities",
    text: "Search supported job sources and save roles that interest you.",
  },
  {
    number: "03",
    title: "Analyze your fit",
    text: "Compare a job with your profile and resume to identify gaps.",
  },
  {
    number: "04",
    title: "Prepare and track",
    text: "Generate preparation, apply and keep your application pipeline updated.",
  },
];

const Landing = () => {
  const onRegister = () => {
    useNavigate('/register',{replace:true})
  }
  const onSignIn = () => {
    useNavigate('/login',{replace:true})
  }
  return (
    <div className={`landing`}>
      {/* ================= NAVBAR ================= */}

      <header className="landing-nav">
        <a href="#home" aria-label="CareerPilot AI home">
          <Brand />
        </a>

        <nav
          className="landing-links"
          aria-label="Main navigation"
        >
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#ai-tools">AI tools</a>
        </nav>

        <div className="landing-actions">

          <Link to="/login">
            <button
                type="button"
                className="secondary-button"
                onClick={onSignIn}
            >
                Sign in
            </button>
          </Link>

          <Link to="/register">
          <button
            type="button"
            className="primary-button small"
            onClick={onRegister}
          >
            Get started
            <ArrowRight size={15} />
          </button>
          </Link>
        </div>
      </header>

      <main id="home">

        {/* ================= HERO ================= */}

        <section className="hero">
          <div className="hero-copy">

            <div className="eyebrow">
              <span />
              AI-POWERED CAREER ASSISTANT
            </div>

            <h1>
              Find better opportunities.
              <br />
              <em>Prepare smarter.</em>
            </h1>

            <p>
              CareerPilot AI brings job discovery, resume
              analysis, application tracking and interview
              preparation into one focused career workspace.
            </p>

            <div className="hero-actions">

              <Link to="/register">
              <button
                type="button"
                className="primary-button"
                onClick={onRegister}
              >
                Build my career workspace
                <ArrowRight size={17} />
              </button>
              </Link>

              <Link to="/login" >
              <button
                type="button"
                className="secondary-button"
                onClick={onSignIn}
              >
                I already have an account
              </button>
              </Link>

            </div>

            <div className="hero-proof">

              <div
                className="proof-avatars"
                aria-hidden="true"
              >
                <span>CP</span>
                <span>AI</span>
                <span>JS</span>
                <b>+</b>
              </div>

              <span>
                Built for students, fresh graduates and
                early-career developers.
              </span>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div
            className="hero-visual"
            aria-label="CareerPilot AI job matching preview"
          >

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            {/* Skill Gap */}

            <div className="floating-note note-one">

              <div className="note-icon green">
                <Check size={13} />
              </div>

              <div>
                <strong>Skill gap found</strong>
                <small>
                  Docker appears frequently
                </small>
              </div>

            </div>


            {/* Match Card */}

            <div className="match-card">

              <div className="match-top">

                <div>
                  <span className="mini-label">
                    AI JOB MATCH
                  </span>

                  <h3>
                    Full Stack Developer
                  </h3>
                </div>

                <span className="match-score">
                  87
                  <small>%</small>
                </span>

              </div>

              <p>
                Personalized technical readiness indicator
              </p>

              <div className="match-line">

                <span>
                  <Check size={13} />
                  React
                </span>

                <span>
                  <Check size={13} />
                  Node.js
                </span>

              </div>

              <div className="match-line">

                <span>
                  <Check size={13} />
                  MongoDB
                </span>

                <span className="missing">
                  <Target size={13} />
                  Docker
                </span>

              </div>

              <div className="match-footer">

                <span>
                  4 matched · 1 gap
                </span>

                <Sparkles size={14} />

              </div>

            </div>


            {/* Interview Plan */}

            <div className="floating-note note-two">

              <div className="note-icon green">
                <Sparkles size={13} />
              </div>

              <div>
                <strong>
                  Interview plan ready
                </strong>

                <small>
                  14 days · role-specific
                </small>
              </div>

            </div>

          </div>
        </section>


        {/* ================= STRIP ================= */}

        <div
          className="landing-strip"
          aria-label="Product capabilities"
        >

          <div>
            <span>Real job discovery</span>
            <span>Resume intelligence</span>
            <span>Application tracking</span>
          </div>

          <b>CareerPilot AI</b>

        </div>


        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="feature-section"
        >

          <div className="section-intro">

            <div>

              <span className="feature-number">
                01 / WHAT YOU GET
              </span>

              <h2>
                One workspace for the entire
                job-search loop.
              </h2>

            </div>

            <p>
              CareerPilot is designed around what happens
              after you find a vacancy: understanding the
              role, preparing your application and becoming
              interview-ready.
            </p>

          </div>


          <div className="feature-grid">

            {features.map(
              ({ icon: Icon, title, text }, index) => (

                <article
                  className="feature-card"
                  key={title}
                >

                  <span className="feature-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                </article>

              )
            )}

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          id="how-it-works"
          className="workflow-section"
        >

          <div className="workflow-copy">

            <span className="feature-number">
              02 / HOW IT WORKS
            </span>

            <h2>
              From vacancy to interview prep
              without losing the context.
            </h2>

            <p>
              Your profile becomes the common thread.
              The platform uses the information you choose
              to store to make each career action more useful.
            </p>

          </div>


          <div className="workflow-steps">

            {workflowSteps.map(
              ({ number, title, text }) => (

                <div
                  className="workflow-step"
                  key={number}
                >

                  <span>{number}</span>

                  <div>

                    <h3>{title}</h3>

                    <p>{text}</p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* ================= AI TOOLS ================= */}

        <section
          id="ai-tools"
          className="ai-section"
        >

          <div className="ai-panel">

            <div>

              <span className="feature-number">
                03 / AI TOOLKIT
              </span>

              <h2>
                AI that explains the next step,
                not just a number.
              </h2>

              <p>
                Match scores are transparent readiness
                indicators. CareerPilot shows the skills
                behind the result so you can act on the feedback.
              </p>

            </div>


            <div className="ai-checks">

              <span>
                <Check size={15} />
                Matched skills
              </span>

              <span>
                <Check size={15} />
                Missing keywords
              </span>

              <span>
                <Check size={15} />
                Resume feedback
              </span>

              <span>
                <Check size={15} />
                Interview questions
              </span>

              <span>
                <Check size={15} />
                Preparation roadmap
              </span>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="landing-cta">

          <div>

            <span className="eyebrow">
              READY WHEN YOU ARE
            </span>

            <h2>
              Your next career move deserves a system.
            </h2>

            <p>
              Create your workspace and start with your profile.
            </p>

          </div>

          <Link to="/register"><button
            type="button"
            className="primary-button"
            onClick={onRegister}
          >
            Get started free
            <ArrowRight size={17} />
          </button></Link>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">

        <Brand />

        <span>
          CareerPilot AI · Navigate your career with intelligence.
        </span>

        <Link to="/login" ><button
          type="button"
          className="link-button"
          onClick={onSignIn}
        >
          Sign in
        </button></Link>

      </footer>

    </div>
  );
};

export default Landing;