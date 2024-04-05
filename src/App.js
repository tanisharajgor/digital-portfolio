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
            marginTop: "0px",
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
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%2846%2C46%2C46%2C1%29&t=panda-syntax&wt=none&l=text&width=680&ds=true&dsyoff=6px&dsblur=100px&wc=true&wa=true&pv=17px&ph=23px&ln=false&fl=1&fm=Hack&fs=14px&lh=135%25&si=false&es=2x&wm=false&code=Where%2520I%27ve%2520Been%2520%25F0%259F%259A%2580%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%250AWork%253A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250AFM%2520Global%253A%2520Data%2520Science%2520Intern%250AAccenture%253A%2520IT%2520Consulting%2520Intern%250A%250AResearch%253A%250ACenter%2520for%2520Design%253A%2520Software%2520Developer%250ABU%2520AI4ALL%253A%2520Machine%2520Learning%2520Intern%250A%250AClubs%253A%250AElectric%2520Racing%253A%2520Software%2520Developer%250AAerospaceNU%253A%2520Systems%2520Software%2520Developer"
          style={{
            width: "959px",
            height: "400px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
            borderRadius: "20px",
            marginTop: "50px",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </header>

      <header
        className="App-header"
        style={{ marginTop: "0px", minHeight: "40vh", justifyContent: "top" }}
      >
        <p
          style={{
            fontFamily: "Nunito",
            zIndex: "3",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          My Projects (Github Code, Presentations & Papers)
        </p>

        <div class="grid-backing" style={{ marginTop: "20px" }}>
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
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Machine Learning
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Neural Radiance Fields
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Unity
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    REST API
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    C++
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Python
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    SQL
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Augmented Reality
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
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
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Predictive Analytics
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Data Visualization
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Python
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    JavaScript
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    React.js
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    D3.js
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Banking & Finance
                  </span>

                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
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
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Convolution
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Encoding & Decoding
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    General Adversarial Networks
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Keras
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    OpenCV
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    TensorFlow
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Key Point Detection
                  </span>

                  <span
                    style={{ marginRight: "0px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
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
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Neural Networks
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Object Recognition
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Supervised Learning
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    TensorFlow
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Scikit-learn
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    OpenCV
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
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
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Pandas
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    NumPy
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Matplot.lib
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    One-hot Encoding
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    K-Means
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Naive Bayes
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Support Vector Machine
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    Decision Trees
                  </span>
                  <span
                    style={{ marginRight: "10px" }}
                    className="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-blue-300 border border-blue-300"
                  >
                    MLP
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>
      <header style={{ minHeight: "5px", marginTop: "0px", textAlign: "center", marginTop: "50px" }}>
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
        <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <Button buttonText="Girls Who Code" onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/girl-power/girls-who-code?authuser=0"></Button>
        <Button buttonText="International Robotics Honor Society (REC)" onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/home?authuser=0"></Button>
        <Button buttonText="VEX Robotics Mentoring Series" onPress="https://sites.google.com/hillers.org/hopkinetics-irhs/for-the-youth/vex-mentoring-series?authuser=0"></Button>
        </div>
        <p
          style={{
            marginTop: "15px",
            padding: "30px",
            fontFamily: "Nunito",
            fontSize: "12px",
            color: "white"
          }}
        >
          © Copyright 2024. Made with ᡣ𐭩ྀིྀིྀི by Tanisha Rajgor :)
        </p>
      </header>
    </div>
  );
}

export default App;
