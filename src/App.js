import "./App.css";
import "./styling/fonts.css";
import "tailwindcss/tailwind.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Earth from "./components/earth";
import Typewriter from "./components/typewriter";
import Skills from "./components/skills";
import ScrollCaret from "./components/scroll-caret";
import ProjectCard from "./components/project-card";
import Rocket from "./components/rocket";
import Starfield, { launchMeteorShower } from "./components/starfield";
import Navbar from "./components/navbar";
import Splash from "./components/splash";
import Reveal from "./components/reveal";
import SectionHeading from "./components/section-heading";
import Terminal from "./components/terminal";
import projects from "./data/projects";

const SocialPill = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-4 py-1.5 text-sm text-neon transition hover:border-neon hover:bg-neon/15"
  >
    {icon}
    {label}
  </a>
);

// lol
function App() {
  return (
    <div className="App">
      <Splash />
      <Starfield />
      <Navbar />

      <div className="container">
        <Rocket />
      </div>

      <header id="about" className="App-header">
        <div className="relative z-[2] mt-24 flex items-center px-4">
          {/* Easter egg: clicking the Earth sets off a meteor shower */}
          <div className="ml-5 cursor-pointer" onClick={launchMeteorShower} role="presentation">
            <Earth />
          </div>

          <div className="flex max-w-2xl flex-col items-start rounded-2xl border border-white/10 bg-[#111322]/80 p-6 text-left shadow-[0_0_80px_-20px_rgba(91,66,243,0.6)] sm:p-8">
            <p className="text-4xl font-semibold sm:text-5xl">Hello world! 🙂</p>
            <div className="mt-2">
              <Typewriter />
            </div>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-200">
              <p>
                I'm a graduate computer science student at Cornell University
                specializing in Software Development and ML Systems, with a
                love for Mixed Reality, Astronomy, and Music.
              </p>
              <p>
                Previously, I've developed solutions for companies including
                Spotify, Cisco, and Fidelity, and conducted software
                engineering and deep-learning research presented at MIT, the
                Junior Science and Humanities Symposium, and the National Henry
                Ford Invention Convention - work aimed at making systems more
                efficient, accessible, and innovative.
              </p>
              <p>
                This past summer (Summer 2026), I was a SWE Intern at Cisco,
                working within AI Incubation. As an undergrad at Northeastern,
                I was a Systems Software Developer for AerospaceNU and
                Northeastern Electric Racing, as well as a Teaching Assistant
                for Database Design and Object-Oriented Programming.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-base text-gray-300">Check out my:</span>
              <SocialPill
                href="https://www.linkedin.com/in/tanisharajgor/"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <SocialPill
                href="https://github.com/tanisharajgor"
                icon={<FaGithub />}
                label="GitHub"
              />
            </div>
          </div>
        </div>
        <ScrollCaret />
      </header>

      <main>
        <section id="tools" className="scroll-mt-20 py-16">
          <Reveal>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <SectionHeading>Tools/Technologies</SectionHeading>
            </div>
            <Skills />
          </Reveal>
        </section>

        <section id="experience" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading>Experience</SectionHeading>
              <div className="mx-auto max-w-4xl">
                <Terminal />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading subtitle="(Repositories, Presentations, & Papers)">
                Selected Projects
              </SectionHeading>
            </Reveal>
            <div className="grid gap-8">
              {projects.map((project) => (
                <Reveal key={project.title}>
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 pt-16 text-center">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-neon"
        >
          🚀 Back to orbit
        </a>
        <p className="mt-4 text-xs text-gray-400">
          © Copyright 2026. Made with &nbsp;🤍&nbsp; by Tanisha Rajgor :)
        </p>
      </footer>
    </div>
  );
}

export default App;
