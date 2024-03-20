import logo from "./logo.svg";
import "./App.css";
import Earth from "./components/earth";
import "./styling/fonts.css";
import Typewriter from "./components/typewriter";
import FixedSizeWindow from "./components/fixwindowsize";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        <div style={{ display: "flex", alignItems: "center", zIndex: "2" }}>
          <Earth></Earth>
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
                marginBottom: "10px",
              }}
            >
              Hello world! 🙂
            </p>
            <Typewriter></Typewriter>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "Nunito",
                marginBottom: "10px",
                wordWrap: "break-word",
                width: "40vw",
              }}
            >
              Previously, I have developed solutions for Accenture and AI4ALL,
              as well as conducted deep-learning focused research projects
              presented at MIT, Junior Humanities Science Symposium, and the
              National Henry Ford Invention Convention. <br /> <br />I aspire to
              leverage analytical/statistical skills in Machine Learning and
              Artificial Intelligence to make systems more efficient,
              accessible, and innovative. <br /> <br /> This past summer, I
              worked as a Data Science Intern at FM Global and a Research
              Software Developer for the Center of Design.
            </p>
            <p style={{ fontSize: "18px", fontFamily: "Nunito", display: "flex", alignItems: "center" }}>
              Check out my:
              <GitHubIcon style={{ marginLeft: "5px", marginRight: "5px" }}></GitHubIcon>
              <a style={{ color: "#04D9FF", marginRight: "5px" }} href="https://github.com/tanisharajgor">Github</a>
              |
              <LinkedInIcon style={{ marginLeft: "5px", marginRight: "5px" }}></LinkedInIcon>
              <a style={{ color: "#04D9FF", marginRight: "5px" }} href="https://www.linkedin.com/in/tanisharajgor/">LinkedIn</a>
            </p>
          </div>
        </div>
      </header>
      <header className="App-header" style={{ minHeight: "40vh", justifyContent: "top" }}>
        <p style={{ marginTop: "170px", fontFamily: "Nunito", zIndex: "3" }}> What you doing? Nothing to see here! 🙈</p>
        <p style={{ marginTop: "0px", fontFamily: "Nunito", fontSize: "12px" }}>© Copyright 2024. Made with ᡣ𐭩ྀིྀིྀི</p>
      </header>
    </div>
  );
}

export default App;
