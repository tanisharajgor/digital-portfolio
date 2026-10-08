// Projects shown in the "Selected Projects" list, in display order.
// `status` (a badge) and `links` (labeled buttons in the top-right) are optional.
const projects = [
  {
    title: "GigaCity - Traffic-Aware Routing and KV-Cache Management",
    status: "In Progress · GAO Lab",
    description:
      "A research project at Cornell on serving traffic-monitoring AI agents more efficiently. These agents run on cycles, pause for sensors, partially reuse context, and react to incidents, creating a distinctive workload for LLM-serving engines. The project uses traffic metadata (next-use windows, incident state, session lifecycle, and prefix reuse) to decide which KV-cache state to retain, offload, prefetch, or evict, aiming for more active sessions per memory budget with less repeated prefill and KV transfer, evaluated against systems like KVFlow, Continuum, Preble, and Mooncake.",
    tags: [
      "LLM Inference",
      "vLLM",
      "SGLang",
      "KV-Cache Management",
      "AI Agents",
      "Systems for ML",
      "Request Routing",
      "GPUs",
    ],
  },
  {
    title: "Immersify - Bring Videos to Life",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=NzATIRVUi8Y&t=42s" },
      { label: "Devpost", href: "https://devpost.com/software/immersify-ijx4pn" },
      { label: "GitHub", href: "https://github.com/tylervu1/hackmit/tree/main" },
    ],
    description:
      "This project transforms videos into immersive 3D environments by leveraging batch pre-processing systems and Neural Radiance Fields (NeRFs) within a user-centric pipeline. A neural network model has been created to eliminate blur and standardize frames in videos, ensuring clarity and efficiency during convergence. The integration of a Unity front end with Flask and PostgreSQL on the server side, along with custom API calls, enhances workflow efficiency. Recognized as a finalist and runner-up in HackMIT and HackHarvard's Interactive Media Track, the project showcases remarkable potential for applications in VR and 3D printing realms.",
    tags: [
      "Machine Learning",
      "Neural Radiance Fields",
      "Unity",
      "REST API",
      "C++",
      "Python",
      "SQL",
      "Augmented Reality",
      "Interactive Media",
    ],
  },
  {
    title: "Banca Intesa Sanpaolo - Processes",
    status: "Published · DRS 2024",
    links: [
      { label: "Demo", href: "https://nu-center-for-design.github.io/banca-process/" },
      { label: "Paper", href: "https://dl.designresearchsociety.org/drs-conference-papers/drs2024/researchpapers/178/" },
    ],
    description:
      "Developed as part of Northeastern's Center for Design, this project focuses on creating interactive visualizations to delve into Intesa's financial activity structures and anticipate potential risk factors. It involves sophisticated feature engineering techniques alongside network and circle packing layouts, enabling users to interact with the data effectively. Implemented with Python for backend processing and React, D3.js, and PixiJS for frontend development, this project promises to offer a comprehensive and user-friendly tool for financial analysis and risk assessment within Intesa's operations.",
    tags: [
      "Predictive Analytics",
      "Data Visualization",
      "Python",
      "JavaScript",
      "React.js",
      "D3.js",
      "Banking & Finance",
      "Graphs & Network Models",
    ],
  },
  {
    title: "Deepfake Detection Using Haar Cascades & GANs",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=AX7caib4NKo" },
      { label: "Paper", href: "https://drive.google.com/file/d/1bxFbkgaJo9LXJ8JavqTWafhWPNz7BkBE/view" },
      { label: "Write-up", href: "https://tanisharajgor.github.io/Deepfake%20Detection%20Using%20Haar-Cascades%20%20GANs.html" },
    ],
    description:
      "This project is dedicated to advancing the reverse engineering of deep fake technologies by employing innovative techniques. It utilizes Haar Cascades to optimize run-time efficiency and Generative Adversarial Networks trained on facial key points, age, gender, and ethnicity for comprehensive analysis. Additionally, Histogram of Oriented Gradients is generated through cascade operations to map facial edges, facilitating authenticity prediction using MesoNet. The project has been showcased at prestigious events including MIT EurekaFest and the Henry Ford National Invention Convention, underscoring its significance in the field of technology and innovation.",
    tags: [
      "Convolution",
      "Encoding & Decoding",
      "Generative Adversarial Networks",
      "Keras",
      "OpenCV",
      "TensorFlow",
      "Key Point Detection",
      "Python",
    ],
  },
  {
    title: "Efficient Detection and Mitigation of Neurological Diseases Using Machine Learning, ANN, and Regressional Models",
    links: [
      { label: "Write-up", href: "https://tanisharajgor.github.io/Efficient%20Detection%20and%20Mitigation%20of%20Neurological.html" },
    ],
    description:
      "This multifaceted project aims to improve early MRI detection and drug development for Central Nervous System diseases. It involves creating advanced regression models to understand the relationship between amyloid-beta protein concentrations and fold change levels, followed by applying Artificial Neural Networks and Computer Vision techniques to classify neurodegeneration levels in specific brain regions depicted in MRI scans.",
    tags: [
      "Neural Networks",
      "Object Recognition",
      "Supervised Learning",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Regression Analysis",
    ],
  },
  {
    title: "Machine Learning with Star Classification",
    links: [
      { label: "Write-up", href: "https://tanisharajgor.github.io/Star%20Classification.html" },
      { label: "Slides", href: "https://docs.google.com/presentation/d/17hSYxGTYcgA2Ajzglp5D1Px5lqBo-0p8T_YQqQNPCOc/present" },
      { label: "Notebook", href: "https://gist.github.com/tanisharajgor/d50c926a98aaa8109bed9c591b10a0d1" },
    ],
    description:
      "This project seeks to categorize stars according to the Hertzsprung-Russell Diagram by employing preprocessing methods like One-Hot Encoding, Binning, and Feature Engineering. Various models, including SVM, MLP, Decision Tree, Naive Bayes, and K-means clustering, are then utilized, followed by a comparison of their performance using metrics such as precision, accuracy, and recall. Overfitting is analyzed and discussed, alongside the creation of 3D visualizations to depict star feature distributions and relationships within different classes.",
    tags: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "One-hot Encoding",
      "K-Means",
      "Naive Bayes",
      "Support Vector Machine",
      "Decision Trees",
      "MLP",
    ],
  },
];

export default projects;
