import { useEffect, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Sparkles,
  Camera,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Rocket,
  Brain,
  Globe,
  Database,
  Terminal,
  Shield,
  Award,
  Calendar,
  CheckCircle2,
  Send,
  MessageCircle,
  X,
} from "lucide-react";

import "./App.css";

function VedantAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey! 👋 I'm Vedant AI. I'm your portfolio assistant. Ask me about Vedant's skills, projects, education, experience or anything related to his developer journey."
    }
  ]);

  const getReply = (question) => {
    const q = question.toLowerCase().trim();

    // GREETINGS
    if (
      /^(hi|hello|hey|hii|helo|good morning|good evening|good afternoon)\b/.test(q)
    ) {
      return "Hey there! 👋 Welcome to Vedant's portfolio. I'm Vedant AI, your virtual assistant. What would you like to explore today?";
    }

    // ABOUT
    if (
      q.includes("who is vedant") ||
      q.includes("about vedant") ||
      q.includes("tell me about") ||
      q.includes("who are you") ||
      q.includes("about yourself")
    ) {
      return "Vedant Chaubey is a Full Stack Developer and AI enthusiast from Bareilly, Uttar Pradesh, India. He is passionate about building modern web applications, exploring AI technologies and creating practical digital solutions.";
    }

    // SKILLS
    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("tech stack") ||
      q.includes("programming language") ||
      q.includes("what can he do")
    ) {
      return "Vedant's technical toolkit includes:\n\n💻 Programming: Python, JavaScript\n🌐 Frontend: React.js, HTML5, CSS3, Tailwind CSS\n⚙️ Backend: Flask, Django\n🗄️ Database: SQLite\n🔧 Tools: Git & GitHub\n\nHe is also exploring Artificial Intelligence and modern web development.";
    }

    // PROJECTS
    if (
      q.includes("project") ||
      q.includes("portfolio work") ||
      q.includes("applications") ||
      q.includes("built")
    ) {
      return "Here are Vedant's featured projects:\n\n🛒 CodeAlpha E-Commerce Store — Django-based shopping application.\n📊 Project Management Tool — Task and workflow management.\n🌐 Social Media Platform — Web application for user interaction.\n🛡️ Rakshak AI — Intelligent Disaster Management System with emergency SOS.\n🏫 Smart Campus & Placement Ecosystem — AI-powered campus and placement assistance.\n\nYou can explore available repositories in the Projects section.";
    }

    // RAKSHAK AI
    if (q.includes("rakshak") || q.includes("disaster")) {
      return "Rakshak AI is Vedant's Intelligent Disaster Management System. It focuses on emergency SOS reporting, disaster-related assistance and a smart dashboard. The project uses Python, Flask, SQLite and AI technologies. It is currently under development.";
    }

    // SMART CAMPUS
    if (
      q.includes("smart campus") ||
      q.includes("placement ecosystem") ||
      q.includes("placement project")
    ) {
      return "The AI-Powered Smart Campus & Placement Ecosystem is a project designed to improve academic workflows and placement assistance using AI. Its planned technology stack includes React, Python and a database. The project is currently under development.";
    }

    // EDUCATION
    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("degree") ||
      q.includes("qualification") ||
      q.includes("study") ||
      q.includes("studies")
    ) {
      return "Vedant's academic background:\n\n🎓 B.Tech in Computer Science Engineering — Rajshree Institute of Management and Technology, Bareilly, under AKTU.\n📚 Class XII (PCM) — Sacred Hearts Sr. Sec. Public School, Bareilly, CBSE.\n📚 Class X — Sacred Hearts Sr. Sec. Public School, Bareilly, CBSE.";
    }

    // EXPERIENCE
    if (
      q.includes("intern") ||
      q.includes("experience") ||
      q.includes("codealpha") ||
      q.includes("job")
    ) {
      return "Vedant completed the CodeAlpha Full Stack Development Internship Program in September 2026. His internship profile was Full Stack Development, involving practical web development and application-building experience using technologies such as Python and Django.";
    }

    // CONTACT
    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("hire") ||
      q.includes("reach") ||
      q.includes("available for work")
    ) {
      return "You can connect with Vedant for opportunities, collaboration or projects.\n\n📧 Email: chaubeyvedant3@gmail.com\n📍 Location: Bareilly, Uttar Pradesh, India\n\nYou can also visit the Contact section of this portfolio.";
    }

    // GITHUB
    if (q.includes("github") || q.includes("repository") || q.includes("repo")) {
      return "You can explore Vedant's GitHub repositories here:\n\n🔗 https://github.com/Vedant8381\n\nFeel free to check out his projects and development work!";
    }

    // LOCATION
    if (
      q.includes("location") ||
      q.includes("city") ||
      q.includes("where") ||
      q.includes("from")
    ) {
      return "Vedant Chaubey is from Bareilly, Uttar Pradesh, India 🇮🇳.";
    }

    // AI
    if (
      q.includes("artificial intelligence") ||
      q.includes("ai enthusiast") ||
      q.includes("machine learning")
    ) {
      return "Vedant is interested in Artificial Intelligence and intelligent applications. His work includes Rakshak AI, an Intelligent Disaster Management System, and the AI-Powered Smart Campus & Placement Ecosystem.";
    }

    // HOBBIES
    if (
      q.includes("hobby") ||
      q.includes("hobbies") ||
      q.includes("music") ||
      q.includes("singing")
    ) {
      return "Apart from technology, Vedant is passionate about singing and music. He enjoys creative activities alongside software development.";
    }

    // THANKS
    if (
      q.includes("thank") ||
      q.includes("thanks")
    ) {
      return "You're welcome! 😊 Happy to help. Feel free to ask me anything else about Vedant.";
    }

    // GOODBYE
    if (
      q.includes("bye") ||
      q.includes("goodbye")
    ) {
      return "Goodbye! 👋 Thanks for exploring Vedant's portfolio. Have a great day!";
    }

    // DEFAULT
    return "Hmm, I don't have a specific answer for that yet. 🤔\n\nI can help you explore:\n\n💻 Vedant's technical skills\n🚀 Projects and applications\n🎓 Education\n💼 Internship experience\n📧 Contact details\n\nTry asking me one of these!";
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const question = input.trim();

    if (!question) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "typing", text: "typing" }
    ]);

    setInput("");

    setTimeout(() => {
      const reply = getReply(question);

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: reply }
      ]);
    }, 900);
  };

  const handleSuggestion = (suggestion) => {
    const reply = getReply(suggestion);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: suggestion },
      { role: "bot", text: reply }
    ]);
  };

  return (
    <div className="vedant-ai-widget">
      {isOpen && (
        <div className="vedant-ai-window">

          {/* CHAT HEADER */}
          <div className="vedant-ai-header">
            <div className="vedant-ai-avatar">V.</div>

            <div className="vedant-ai-title">
              <h3>VEDANT AI</h3>

              <span>
                <span className="ai-online-dot"></span>
                Portfolio Assistant
              </span>
            </div>

            <button
              className="vedant-ai-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* CHAT MESSAGES */}
          <div className="vedant-ai-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`vedant-ai-message ${message.role}`}
              >
                {message.role === "typing" ? (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  message.text
                )}
              </div>
            ))}
          </div>

          {/* SUGGESTED QUESTIONS */}
          <div className="vedant-ai-suggestions">
            {["Skills", "Projects", "Education", "Contact"].map(
              (suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              )
            )}
          </div>

          {/* INPUT AREA */}
          <form
            className="vedant-ai-input-area"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              aria-label="Chat message"
            />

            <button type="submit" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>

        </div>
      )}

      {/* CHATBOT TOGGLE */}
      <button
        className="vedant-ai-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Vedant AI chatbot"
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}

        {!isOpen && <span className="ai-toggle-pulse"></span>}
      </button>
    </div>
  );
}
function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Vedant's interactive terminal." },
    { type: "output", text: "Type 'help' to see available commands." },
  ]);

  const runCommand = (event) => {
    event.preventDefault();
    const entered = command.trim();
    if (!entered) return;

    const normalized = entered.toLowerCase();
    let output = "";

    if (normalized === "help") {
      output = "Available: help, about, skills, projects, contact, clear";
    } else if (normalized === "about") {
      output = "Vedant Chaubey — Full Stack Developer & AI enthusiast from Bareilly, India.";
    } else if (normalized === "skills") {
      output = "Python • Flask • Django • React.js • JavaScript • HTML • CSS • SQLite • Git & GitHub";
    } else if (normalized === "projects") {
      output = "CodeAlpha E-Commerce Store | Project Management Tool | Social Media Platform | Rakshak AI | Smart Campus & Placement Ecosystem";
    } else if (normalized === "contact") {
      output = "Email: chaubeyvedant3@gmail.com";
    } else if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      output = `Command not found: ${entered}. Type 'help' to see available commands.`;
    }

    setHistory((previous) => [
      ...previous,
      { type: "command", text: `visitor@vedant:~$ ${entered}` },
      { type: "output", text: output },
    ]);

    setCommand("");
  };

  return (
    <section
      id="terminal"
      className="section"
      style={{
        padding: "80px 8%",
        scrollMarginTop: "100px"
      }}
    >
      <div className="section-label">
        / INTERACTIVE TERMINAL
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "28px" }}>
        Explore My <span>Terminal.</span>
      </h2>

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          border: "1px solid rgba(192, 90, 255, 0.35)",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#080611",
          boxShadow: "0 0 35px rgba(168, 85, 247, 0.12)",
          fontFamily: "Consolas, 'Courier New', monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 18px",
            background: "#160d22",
            borderBottom: "1px solid rgba(192, 90, 255, 0.2)"
          }}
        >
          <span style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#ff5f56"
          }} />

          <span style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#ffbd2e"
          }} />

          <span style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#27c93f"
          }} />

          <span style={{
            color: "#b9a8c9",
            fontSize: "12px",
            marginLeft: "10px"
          }}>
            vedant-terminal — bash
          </span>
        </div>

        <div
          style={{
            minHeight: "190px",
            maxHeight: "300px",
            overflowY: "auto",
            padding: "18px",
            color: "#e9ddf5",
            fontSize: "14px",
            lineHeight: 1.8
          }}
        >
          {history.map((entry, index) => (
            <div
              key={`${index}-${entry.type}`}
              style={{
                color: entry.type === "command" ? "#c879ff" : "#d9cde8",
                overflowWrap: "anywhere"
              }}
            >
              {entry.text}
            </div>
          ))}
        </div>

        <form
          onSubmit={runCommand}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            padding: "14px 18px",
            borderTop: "1px solid rgba(192, 90, 255, 0.2)"
          }}
        >
          <span style={{
            color: "#c879ff",
            fontFamily: "Consolas, 'Courier New', monospace",
            whiteSpace: "nowrap"
          }}>
            visitor@vedant:~$
          </span>

          <input
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="Type a command..."
            aria-label="Terminal command"
            autoComplete="off"
            style={{
              flex: 1,
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#fff",
              fontFamily: "Consolas, 'Courier New', monospace",
              fontSize: "14px"
            }}
          />

          <button
            type="submit"
            aria-label="Run terminal command"
            style={{
              border: "1px solid rgba(192, 90, 255, 0.45)",
              background: "rgba(168, 85, 247, 0.15)",
              color: "#d9a5ff",
              borderRadius: "8px",
              padding: "8px 12px",
              cursor: "pointer"
            }}
          >
            Run
          </button>
        </form>
      </div>
    </section>
  );
}
function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  // Scroll Progress Bar + Back To Top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setScrollProgress(progress);
      setShowTopButton(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section, .project-card, .service-card, .achievement-card, .journey-card, .why-me-card, .experience-card, .skill-card"
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Python",
    "Flask",
    "Django",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQLite",
    "Git & GitHub",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "CodeAlpha E-Commerce Store",
      icon: "🛒",
      description:
        "A Django-based online shopping platform featuring product listings, cart management, checkout and order tracking.",
      tech: ["Python", "Django", "SQLite", "HTML/CSS"],
      status: "Completed",
      github: "https://github.com/Vedant8381/CodeAlpha-Ecommerce-Store",
    },
    {
      title: "CodeAlpha Project Management Tool",
      icon: "📊",
      description:
        "A web-based project management application designed to organize tasks and manage project workflows efficiently.",
      tech: ["Python", "Django", "HTML", "CSS"],
      status: "Completed",
      github: "https://github.com/Vedant8381/CodeAlpha_ProjectManagementTool",
    },
    {
      title: "CodeAlpha Social Media Platform",
      icon: "🌐",
      description:
        "A social media web application focused on user interaction and content sharing.",
      tech: ["Python", "Django", "SQLite", "HTML/CSS"],
      status: "Completed",
      github: "https://github.com/Vedant8381/CodeAlpha_SocialMediaPlatform",
    },
    {
      title: "Rakshak AI",
      icon: "🛡️",
      description:
        "An Intelligent Disaster Management System with AI, emergency SOS reporting and a smart dashboard.",
      tech: ["Python", "Flask", "SQLite", "AI"],
      status: "In Progress",
      github: "",
    },
    {
      title: "AI-Powered Smart Campus & Placement Ecosystem",
      icon: "🏫",
      description:
        "An AI-powered campus and placement ecosystem designed to improve academic workflows and placement assistance.",
      tech: ["React", "Python", "AI", "Database"],
      status: "In Progress",
      github: "",
    },
  ];

  const services = [
    {
      icon: <Globe size={25} />,
      title: "Web Development",
      description:
        "Creating modern, responsive and user-friendly websites using modern web technologies.",
    },
    {
      icon: <Terminal size={25} />,
      title: "Backend Development",
      description:
        "Building backend applications, APIs and database-driven systems using Python and Django.",
    },
    {
      icon: <Brain size={25} />,
      title: "AI Solutions",
      description:
        "Exploring artificial intelligence and developing intelligent solutions for real-world problems.",
    },
    {
      icon: <Database size={25} />,
      title: "Database Management",
      description:
        "Designing and managing databases for reliable and efficient web applications.",
    },
  ];

  const achievements = [
    {
      icon: <BriefcaseBusiness size={25} />,
      title: "Full Stack Development Internship",
      description:
        "Completed the CodeAlpha Full Stack Development Internship Program.",
    },
    {
      icon: <GraduationCap size={25} />,
      title: "Technical Training",
      description:
        "Participated in technical training programs and workshops focused on emerging technologies.",
    },
    {
      icon: <Shield size={25} />,
      title: "Disaster Management Training",
      description:
        "Participated in Aapda Mitra and SDRF-related disaster management training programs.",
    },
    {
      icon: <Trophy size={25} />,
      title: "Music & Performance",
      description:
        "Passionate about singing, music and participating in stage performances.",
    },
  ];

  return (
    <div className="portfolio">
          {/* SCROLL PROGRESS BAR */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {loading && (
        <div className="loading-screen">
          <div className="loader-content">
            <div className="loader-logo">
              V<span>.</span>
            </div>

            <h2>
              VEDANT <span>CHAUBEY</span>
            </h2>

            <p>INITIALIZING PORTFOLIO...</p>

            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>

            <div className="loader-bottom">
              <span>FULL STACK DEVELOPER</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">
          Vedant<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#terminal">Terminal</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a
  href="https://github.com/Vedant8381"
  target="_blank"
  rel="noreferrer"
  className="github-nav-btn"
  aria-label="Visit my GitHub profile"
>
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 5 18.2 5.3 18.2 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 0Z" />
</svg>
</a>

        <a href="#contact" className="resume-btn">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} />
            FULL STACK DEVELOPER
          </div>

          <h1>
            Hi, I'm <br />
            <span>Vedant Chaubey</span>
          </h1>

          <h3>
            Building Digital Experiences
            <span className="purple"> with AI.</span>
          </h3>

          <p>
            I am a developer passionate about creating modern web
            applications, intelligent AI solutions and digital
            experiences that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href="/Vedant_Chaubey_Resume.pdf"
              download="Vedant_Chaubey_Resume.pdf"
              className="resume-download-btn"
            >
              Download Resume
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a
              href="https://github.com/Vedant8381"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Users />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Camera />
            </a>

            <a
              href="mailto:chaubeyvedant3@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="hero-visual">
          <div className="profile-glow"></div>

          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img
                src="/vedant.png"
                alt="Vedant Chaubey - Full Stack Developer"
                className="profile-image"
              />
            </div>

            <div className="profile-info">
              <h3>Vedant Chaubey</h3>

              <p>
                Full Stack Developer
                <span className="purple">
                  {" "} | AI Enthusiast
                </span>
              </p>

              <div className="profile-location">
                <Code2 size={15} />
                Bareilly, India
              </div>
            </div>
          </div>

          <div className="floating-badge">
            <Sparkles size={18} />
            AI Enthusiast
          </div>

          <div className="floating-code-badge">
            <Code2 size={18} />
            Developer
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">
        <div className="section-label">
          01 / ABOUT ME
        </div>

        <h2>
          Passionate about <span>Technology.</span>
        </h2>

        <p>
          I'm Vedant Chaubey, a developer from Bareilly,
          Uttar Pradesh. I enjoy building web applications
          and exploring artificial intelligence. My goal is
          to create meaningful digital products with clean
          design and practical functionality.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="services section" id="services">
        <div className="section-label">
          02 / WHAT I DO
        </div>

        <h2>
          Turning Ideas Into <span>Solutions.</span>
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="education section" id="education">
        <div className="section-label">
          03 / EDUCATION
        </div>

        <h2>
          My Academic <span>Journey.</span>
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={22} />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">
                Undergraduate
              </span>

              <h3>
                B.Tech - Computer Science Engineering
              </h3>

              <p>
                Rajshree Institute of Management and Technology,
                Bareilly
              </p>

              <span className="timeline-tag">
                AKTU
              </span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={22} />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">
                Senior Secondary
              </span>

              <h3>Class XII - PCM</h3>

              <p>
                Sacred Hearts Sr. Sec. Public School, Bareilly
              </p>

              <span className="timeline-tag">
                CBSE Board
              </span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={22} />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">
                Secondary
              </span>

              <h3>Class X</h3>

              <p>
                Sacred Hearts Sr. Sec. Public School, Bareilly
              </p>

              <span className="timeline-tag">
                CBSE Board
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TERMINAL */}
      <InteractiveTerminal />

      {/* SKILLS SECTION */}
      <section className="skills section" id="skills">
        <div className="section-label">
          04 / MY TOOLKIT
        </div>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <Code2 size={18} />
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects section" id="projects">
        <div className="section-label">
          05 / SELECTED WORK
        </div>

        <h2>
          Featured <span>Projects</span>
        </h2>

                <div className="project-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="project-icon">
                {project.icon}
              </div>

              <div className="project-status">
                <span
                  className={
                    project.status === "Completed"
                      ? "status-completed"
                      : "status-progress"
                  }
                >
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-card-action">
                Explore Project <ArrowUpRight size={17} />
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="project-modal-close"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>

      <div className="project-modal-icon">
        {selectedProject.icon}
      </div>

      <span
        className={
          selectedProject.status === "Completed"
            ? "status-completed"
            : "status-progress"
        }
      >
        {selectedProject.status}
      </span>

      <h2>{selectedProject.title}</h2>

      <p>{selectedProject.description}</p>

      <h3>Technologies Used</h3>

      <div className="project-tags">
        {selectedProject.tech.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {selectedProject.github && (
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noreferrer"
          className="project-modal-github"
        >
          View GitHub Repository
          <ArrowUpRight size={17} />
        </a>
      )}
    </div>
  </div>
)}
      </section>
            {/* EXPERIENCE SECTION */}
      <section className="experience section" id="experience">
        <div className="section-label">
          06 / EXPERIENCE
        </div>

        <h2>
          Professional <span>Experience.</span>
        </h2>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={28} />
            </div>

            <div className="experience-header">
              <span className="experience-badge">
                Internship
              </span>

              <span className="experience-date">
                September 2026
              </span>
            </div>

            <h3>Full Stack Development Intern</h3>

            <h4>CodeAlpha</h4>

            <p>
              Worked on web development projects involving
              frontend and backend technologies, application
              development and practical implementation of
              programming concepts.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>Django</span>
              <span>Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievements section" id="achievements">
        <div className="section-label">
          07 / ACHIEVEMENTS
        </div>

        <h2>
          Highlights & <span>Accomplishments.</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement.title}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="journey section" id="journey">
        <div className="section-label">
          08 / MY JOURNEY
        </div>

        <h2>
          Growing Through <span>Experience.</span>
        </h2>

        <div className="journey-grid">
          <div className="journey-card">
            <span className="journey-number">01</span>
            <h3>Learning</h3>
            <p>
              Building a strong foundation in programming
              and software development.
            </p>
          </div>

          <div className="journey-card">
            <span className="journey-number">02</span>
            <h3>Building</h3>
            <p>
              Developing real-world applications and
              exploring modern technologies.
            </p>
          </div>

          <div className="journey-card">
            <span className="journey-number">03</span>
            <h3>Innovating</h3>
            <p>
              Exploring AI-powered solutions and
              meaningful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section className="certificates section" id="certificates">
        <div className="section-label">
          09 / CERTIFICATES
        </div>

        <h2>
          Certifications & <span>Training.</span>
        </h2>

        <p className="certificates-intro">
          A collection of my certifications, technical training
          programs, workshops and professional achievements.
        </p>

        <div className="certificates-grid">
          {[
            {
              title: "CODE ALPHA",
              image: "/certificates/codealpha.jpeg",
              category: "Internship",
            },
            {
              title: "COVID-19",
              image: "/certificates/COVID-19.jpeg",
              category: "Awareness Certificate",
            },
            {
              title: "Drone Bootcamp",
              image: "/certificates/DRONE BOOTCAMP.jpeg",
              category: "Technical Training",
            },
            {
              title: "EC Council",
              image: "/certificates/EC COUNCIL.jpeg",
              category: "Certification",
            },
            {
              title: "Institution of Engineers",
              image: "/certificates/INSTITUTION OF ENGINEERS.jpeg",
              category: "Technical Seminar",
            },
            {
              title: "International Conference",
              image: "/certificates/INTERNATIONAL CONFERENCE.jpeg",
              category: "Conference",
            },
            {
              title: "Internship Cum Training",
              image: "/certificates/INTERNSHIP CUM TRAINING.jpeg",
              category: "Professional Training",
            },
            {
              title: "IOE 12 June 2025",
              image: "/certificates/IOE 12 JUNE 2025.jpeg",
              category: "Technical Seminar",
            },
            {
              title: "IoT Academy IIT Roorkee",
              image: "/certificates/IOT ACADEMY IIT ROORKEE.jpeg",
              category: "IoT Training",
            },
            {
              title: "SDRF Training",
              image: "/certificates/SDRF.jpeg",
              category: "Disaster Management Training",
            },
            {
              title: "Web Developer",
              image: "/certificates/WEB DEVELOPER.jpeg",
              category: "Web Development",
            },
          ].map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  loading="lazy"
                />
              </div>

              <div className="certificate-card-content">
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                                <button
                  type="button"
                  className="certificate-view-link"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  View Certificate <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
                {selectedCertificate && (
          <div
            className="certificate-modal"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="certificate-modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="certificate-modal-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
              >
                &times;
              </button>

              <h3>{selectedCertificate.title}</h3>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-modal-image"
              />
            </div>
          </div>
        )}
      </section>

      {/* WHY WORK WITH ME */}
      <section className="why-me section" id="why-me">
        <div className="section-label">
          10 / WHY WORK WITH ME
        </div>

        <h2>
          What Makes Me <span>Different?</span>
        </h2>

        <div className="why-me-grid">
          <div className="why-me-card">
            <CheckCircle2 size={24} />
            <h3>Problem Solver</h3>
            <p>
              Focused on understanding problems and
              creating practical solutions.
            </p>
          </div>

          <div className="why-me-card">
            <Rocket size={24} />
            <h3>Continuous Learner</h3>
            <p>
              Always exploring new tools, technologies
              and development practices.
            </p>
          </div>

          <div className="why-me-card">
            <Users size={24} />
            <h3>Team Collaboration</h3>
            <p>
              Interested in teamwork, communication
              and sharing ideas.
            </p>
          </div>

          <div className="why-me-card">
            <Sparkles size={24} />
            <h3>Creative Thinking</h3>
            <p>
              Combining creativity with technology
              to build better digital experiences.
            </p>
          </div>
        </div>
      </section>
      {/* GITHUB STATS SECTION */}
<section className="github-stats section" id="github-stats">
  <div className="section-label">
    12 / GITHUB ACTIVITY
  </div>

  <h2>
    My GitHub <span>Statistics.</span>
  </h2>

  <p className="github-stats-description">
    A glimpse into my coding journey and open-source activity.
  </p>

  <div className="github-stats-grid">
    <img
      src="https://github-stats-extended.vercel.app/api?username=Vedant8381&show_icons=true&theme=transparent&hide_border=true"
      alt="Vedant's GitHub Statistics"
    />

    <img
      src="https://github-stats-extended.vercel.app/api/top-langs/?username=Vedant8381&layout=compact&theme=transparent&hide_border=true"
      alt="Vedant's Most Used Languages"
    />
  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">
        <div className="section-label">
          11 / GET IN TOUCH
        </div>

        <h2>
          Let's build something <span>great.</span>
        </h2>

        <p>
          Have an idea or opportunity? Let's connect and create
          something amazing together.
        </p>

        <a
          href="mailto:chaubeyvedant3@gmail.com"
          className="primary-btn"
        >
          Say Hello
          <Mail size={18} />
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>
          Vedant<span>.</span>
        </h3>

        <p>
          Designed & Built with passion © 2026
        </p>
      </footer>
      {/* BACK TO TOP BUTTON */}
      {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          title="Back to Top"
        >
          ↑
        </button>
      )}
      {/* AI CHATBOT */}
      <VedantAIChat />
    </div>
  );
}

export default App;