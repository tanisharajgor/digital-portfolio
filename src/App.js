import logo from "./logo.svg";
import "./App.css";
import Earth from "./components/earth";
import "./styling/fonts.css";
import Typewriter from "./components/typewriter";
import FixedSizeWindow from "./components/fixwindowsize";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./styling/card.css";
import "tailwindcss/tailwind.css";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="orbit">
          <div class="rocket">
            <div class="window"></div>
          </div>
          <div class="fire"></div>
        </div>
      </div>
      <header className="App-header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            zIndex: "2",
            marginTop: "10px",
            marginLeft: "0px",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <Earth></Earth>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
              textAlign: "left",
              marginLeft: "0px",
              backgroundColor: "rgba(75, 75, 75, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "50px",
                fontFamily: "Nunito",
                marginTop: "10px",
                marginBottom: "0px",
              }}
            >
              Hello world! 🙂
            </p>
            <Typewriter></Typewriter>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "Nunito",
                marginBottom: "0px",
                marginTop: "10px",
                wordWrap: "break-word",
                width: "50vw",
              }}
            >
              I'm a Data Science Student at Northeastern University, with a love
              for Machine Learning, Software Development, Mixed Reality, and
              Astronomy.
              <br /> <br />
              Previously, I have developed solutions for Accenture, FM Global,
              Boston University, and the Center for Design, as well as conducted
              software engineering and deep-learning focused research projects
              presented at MIT, Junior Humanities Science Symposium, and the
              National Henry Ford Invention Convention — focused on making
              systems more efficient, accessible, and innovative.
              <br /> <br />
              I'm currently a Systems Software Developer for AerospaceNU and
              Northeastern Electric Racing, as well as a Discrete Mathematics
              Teaching Assistant.
              <br /> <br />
            </p>

            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                fontFamily: "Nunito",
                display: "flex",
                alignItems: "center",
              }}
            >
              Check out my:
              <GitHubIcon
                style={{ marginLeft: "5px", marginRight: "5px" }}
              ></GitHubIcon>
              <a
                style={{ color: "#04D9FF", marginRight: "5px" }}
                href="https://github.com/tanisharajgor"
              >
                Github
              </a>
              |
              <LinkedInIcon
                style={{ marginLeft: "5px", marginRight: "5px" }}
              ></LinkedInIcon>
              <a
                style={{ color: "#04D9FF", marginRight: "5px" }}
                href="https://www.linkedin.com/in/tanisharajgor/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </header>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        <p style={{ fontFamily: "Nunito", color: "white", fontSize: "30px", marginBottom: "10px" }}>
          Tools/Technologies
        </p>
        <Skills></Skills>
      </div>

      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%2846%2C46%2C46%2C1%29&t=panda-syntax&wt=none&l=text&width=680&ds=true&dsyoff=6px&dsblur=100px&wc=true&wa=true&pv=17px&ph=23px&ln=false&fl=1&fm=Hack&fs=14px&lh=135%25&si=false&es=2x&wm=false&code=Where%2520I%27ve%2520Been%2520%25F0%259F%259A%2580%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%250AWork%253A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250AFM%2520Global%253A%2520Data%2520Science%2520Intern%250AAccenture%253A%2520IT%2520Consulting%2520Intern%250A%250AResearch%253A%250ACenter%2520for%2520Design%253A%2520Software%2520Developer%250ABU%2520AI4ALL%253A%2520Machine%2520Learning%2520Intern%250A%250AClubs%253A%250AElectric%2520Racing%253A%2520Software%2520Developer%250AAerospaceNU%253A%2520Systems%2520Software%2520Developer"
          style={{
            width: "959px",
            height: "354px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
            borderRadius: "20px",
            marginTop: "0px",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </header>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <p
          style={{
            marginTop: "0px",
            fontFamily: "Nunito",
            fontSize: "12px",
            color: "white",
            padding: "10px",
          }}
        >
          © Copyright Tanisha Rajgor 2024. Made with ᡣ𐭩ྀིྀིྀི
        </p>
      </header>

      {/* <header
        className="App-header"
        style={{ minHeight: "40vh", justifyContent: "top" }}
      >
        <p style={{ fontFamily: "Nunito", zIndex: "3", fontSize: "40px" }}>
          My Projects (Github Code, Presentations & Papers)
        </p>

        <div class="grid-backing">
          <div class="tools">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
          </div>
          <div class="card__content"></div>
          <div class="grid-container">
            <div class="card">
              <div class="card-info">
                <p class="title">Magic Card</p>
              </div>
            </div>
            <div class="card">
              <div class="card-info">
                <p class="title">Magic Card</p>
              </div>
            </div>
            <div class="card">
              <div class="card-info">
                <p class="title">Magic Card</p>
              </div>
            </div>
            <div class="card">
              <div class="card-info">
                <p class="title">Magic Card</p>
              </div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: "170px", fontFamily: "Nunito", zIndex: "3" }}>
          {" "}
          What you doing? Nothing to see here! 🙈
        </p>
        <p style={{ marginTop: "0px", fontFamily: "Nunito", fontSize: "12px" }}>
          © Copyright 2024. Made with ᡣ𐭩ྀིྀིྀི
        </p>
      </header> */}
    </div>
  );
}

export default App;
