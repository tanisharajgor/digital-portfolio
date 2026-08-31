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
import ScrollCaret from "./components/scroll-caret";
import Button from "./components/button";
import "./styling/button.css";
import "./styling/apple-code-view.css";
import Rocket from "./components/rocket";

// lol
function App() {
  return (
    <div className="App">
      <div class="container">
        <Rocket />
      </div>
      <header className="App-header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            zIndex: "2",
            marginTop: "20px",
            marginBottom: "0px",
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
              marginRight: "15px",
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
                fontSize: "16px",
                fontFamily: "Nunito",
                marginBottom: "0px",
                marginTop: "10px",
                wordWrap: "break-word",
                width: "50vw",
              }}
            >
              I'm a graduate computer science student at Cornell University with
              a love for Machine Learning, Software Development, Mixed Reality,
              and Astronomy.
              <br /> <br />
              Previously, I've developed solutions for companies including
              Spotify, Cisco, and Fidelity, and conducted software engineering
              and deep-learning research presented at MIT, the Junior Science
              and Humanities Symposium, and the National Henry Ford Invention
              Convention — work aimed at making systems more efficient,
              accessible, and innovative.
              <br /> <br />
              This past summer (Summer 2026), I was a SWE Intern at Cisco,
              working within AI Incubation. As an undergrad at Northeastern, I
              was a Systems Software Developer for AerospaceNU and Northeastern
              Electric Racing, as well as a Teaching Assistant for Database
              Design and Object-Oriented Programming.
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
                GitHub
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
        <ScrollCaret />
      </header>

      <header style={{ minHeight: "5px", marginTop: "0px" }}>
        <div
          id="tools"
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito",
              color: "white",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            Tools/Technologies
          </p>
          <Skills></Skills>
        </div>
      </header>

      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div className="code-card">
          <div className="code-card-dots">
            <div className="code-card-dot code-card-dot-red" />
            <div className="code-card-dot code-card-dot-yellow" />
            <div className="code-card-dot code-card-dot-green" />
          </div>

          <div>{`Where I've Been 🚀

Work:
Cisco: Software Engineering Intern (AI Incubation)  - Summer 2026
Spotify: Software Engineering Intern (Core Ex.)     - Summer 2025
UKG: Software Engineering Intern (Cloud)            - Fall 2024
Fidelity: Data Engineering Intern                   - Summer 2024
FM Global: Data Science Intern                      - Summer 2023
Accenture: IT Consulting Intern                     - Summer 2022

Research:
Center for Design @ Northeastern: Research Software Developer
Boston University AI4ALL: Machine Learning Intern

Clubs:
Electric Racing: Software Developer
AerospaceNU: Systems Software Developer`}</div>
        </div>
      </header>

      <header
        className="App-header"
        style={{ marginTop: "20px", minHeight: "40vh", justifyContent: "top" }}
      >
        <p
          style={{
            fontFamily: "Nunito",
            zIndex: "3",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          My Projects (GitHub Code, Presentations & Papers)
        </p>

        <div class="grid-backing" style={{ marginTop: "20px", margin: "20px" }}>
          <div class="card__content"></div>

          <div class="grid-container">
            <a
              class="card"
              href="https://devpost.com/software/immersify-ijx4pn?ref_content=user-portfolio&ref_feature=in_progress"
            >
              <div class="card-info">
                <p
                  class="title"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Immersify - Bring Videos to Life
                </p>
                <p style={{ fontSize: "12px" }}>
                  This project transforms videos into immersive 3D environments
                  by leveraging batch pre-processing systems and Neural Radiance
                  Fields (NeRFs) within a user-centric pipeline. A neural
                  network model has been created to eliminate blur and
                  standardize frames in videos, ensuring clarity and efficiency
                  during convergence. The integration of Unity, Flask, and
                  PostgreSQL on the server-side, along with custom API calls,
                  enhances workflow efficiency. Recognized as a finalist and
                  runner-up in HackMIT and HackHarvard's Interactive Media
                  Track, the project showcases remarkable potential for
                  applications in VR and 3D printing realms.
                </p>
                <div style={{ marginTop: "10px", gap: "10px" }}>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Machine Learning
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Neural Radiance Fields
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Unity
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    REST API
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    C++
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Python
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    SQL
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Augmented Reality
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Interactive Media
                  </span>
                </div>
              </div>
            </a>

            <a
              class="card"
              href="https://nu-center-for-design.github.io/banca-process/"
            >
              <div class="card-info">
                <p
                  class="title"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Banca Intesa Sanpaolo - Processes
                </p>
                <p style={{ fontSize: "12px" }}>
                  Developed as part of Northeastern's Center for Design, this
                  project focuses on creating interactive visualizations to
                  delve into Intesa's financial activity structures and
                  anticipate potential risk factors. It involves sophisticated
                  feature engineering techniques alongside network and circle
                  packing layouts, enabling users to interact with the data
                  effectively. Implemented with Python for backend processing
                  and React, D3.js, and PixiJS for frontend development, this
                  project promises to offer a comprehensive and user-friendly
                  tool for financial analysis and risk assessment within
                  Intesa's operations.
                </p>
                <div style={{ marginTop: "10px", gap: "10px" }}>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Predictive Analytics
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Data Visualization
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Python
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    JavaScript
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    React.js
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    D3.js
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Banking & Finance
                  </span>

                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Graphs & Network Models
                  </span>
                </div>
              </div>
            </a>

            <a
              class="card"
              href="https://tanisharajgor.github.io/Deepfake%20Detection%20Using%20Haar-Cascades%20%20GANs.html"
            >
              <div class="card-info">
                <p
                  class="title"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Deepfake Detection Using Haar Cascades & GANs
                </p>
                <p style={{ fontSize: "12px" }}>
                  This project is dedicated to advancing the reverse engineering
                  of deep fake technologies by employing innovative techniques.
                  It utilizes Haar Cascades to optimize run-time efficiency and
                  General Adversarial Networks trained on facial key points,
                  age, gender, and ethnicity for comprehensive analysis.
                  Additionally, Histogram of Oriented Gradients is generated
                  through cascade operations to map facial edges, facilitating
                  authenticity prediction using MesoNet. The project has been
                  showcased at prestigious events including MIT Eurekafest and
                  the Henry Ford National Invention Convention, underscoring its
                  significance in the field of technology and innovation.
                </p>
                <div style={{ marginTop: "0px", gap: "10px" }}>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Convolution
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Encoding & Decoding
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    General Adversarial Networks
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Keras
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    OpenCV
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    TensorFlow
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Key Point Detection
                  </span>

                  <span
                    style={{ marginRight: "0px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Python
                  </span>
                </div>
              </div>
            </a>

            <a
              class="card"
              href="https://tanisharajgor.github.io/Efficient%20Detection%20and%20Mitigation%20of%20Neurological.html"
            >
              <div class="card-info">
                <p
                  class="title"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Efficient Detection and Mitigation of Neurological Diseases
                  Using Machine Learning, ANN, and Regressional Models
                </p>
                <p style={{ fontSize: "12px" }}>
                  This multifaceted project aims to improve early MRI detection
                  and drug development for Central Nervous System diseases. It
                  involves creating advanced regression models to understand the
                  relationship between amyloid-beta protein concentrations and
                  fold change levels, followed by applying Artificial Neural
                  Networks and Computer Vision techniques to classify
                  neurodegeneration levels in specific brain regions depicted in
                  MRI scans.
                </p>
                <div style={{ marginTop: "0px", gap: "10px" }}>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Neural Networks
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Object Recognition
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Supervised Learning
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    TensorFlow
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Scikit-learn
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    OpenCV
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Regressional Analysis
                  </span>
                </div>
              </div>
            </a>

            <a
              class="card"
              href="https://tanisharajgor.github.io/Star%20Classification.html"
            >
              <div class="card-info">
                <p
                  class="title"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Machine Learning with Star Classification
                </p>
                <p style={{ fontSize: "12px" }}>
                  This project seeks to categorize stars according to the
                  Hertzsprung-Russell Diagram by employing preprocessing methods
                  like One-Hot Encoding, Binning, and Feature Engineering.
                  Various classifiers, including SVM, MLP, Decision Tree, Naive
                  Bayes, and K-means, are then utilized, followed by a
                  comparison of their performance using metrics such as
                  precision, accuracy, and recall. Overfitting is analyzed and
                  discussed, alongside the creation of 3D visualizations to
                  depict star feature distributions and relationships within
                  different classes.
                </p>
                <div style={{ marginTop: "10px", gap: "10px" }}>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Pandas
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    NumPy
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Matplot.lib
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    One-hot Encoding
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    K-Means
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Naive Bayes
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Support Vector Machine
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    Decision Trees
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    MLP
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>
      <header
        style={{
          minHeight: "5px",
          marginTop: "0px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <p
          style={{
            fontFamily: "Nunito",
            color: "white",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          Giving Back to The Community
        </p>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            margin: "30px",
          }}
          className="button-container"
        >
          <Button
            buttonText="Girls Who Code"
            onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/girl-power/girls-who-code?authuser=0"
          ></Button>
          <Button
            buttonText="International Robotics Honor Society (REC)"
            onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/home?authuser=0"
          ></Button>
          <Button
            buttonText="VEX Robotics Mentoring Series"
            onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/for-the-youth/vex-mentoring-series?authuser=0"
          ></Button>
        </div>
        <p
          style={{
            marginTop: "15px",
            padding: "30px",
            fontFamily: "Nunito, sans-serif, emoji",
            fontSize: "12px",
            color: "white",
          }}
        >
          © Copyright 2026. Made with &nbsp;🤍&nbsp; by Tanisha Rajgor :)
        </p>
      </header>
    </div>
  );
}

export default App;
