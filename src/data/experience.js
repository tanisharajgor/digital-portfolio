// Shown in the experience terminal, in display order.
// Optional `links` turn the org name into hyperlinks (joined with " & ").
const experience = [
  {
    heading: "Work",
    items: [
      { org: "Cisco", role: "Software Engineering Intern (AI Incubation)", date: "Summer 2026" },
      { org: "Spotify", role: "Software Engineering Intern (Core Ex.)", date: "Summer 2025" },
      { org: "UKG", role: "Software Engineering Intern (Cloud)", date: "Fall 2024" },
      { org: "Fidelity", role: "Data Engineering Intern (Portfolio Management)", date: "Summer 2024" },
    ],
  },
  {
    heading: "Research",
    items: [
      { org: "GAO Lab @ Cornell", role: "Research Software Developer (ML Infra)" },
      { org: "Center for Design @ Northeastern", role: "Research Software Developer (Business Intelligence)" },
      { org: "AI4ALL @ Boston University", role: "Machine Learning Intern" },
    ],
  },
  {
    heading: "Clubs",
    items: [
      {
        org: "AerospaceNU (CubeSat) & Electric Racing",
        role: "Systems Software Developer",
        links: [
          { label: "AerospaceNU (CubeSat)", href: "https://www.aerospacenu.com/" },
          { label: "Electric Racing", href: "https://electricracing.northeastern.edu/" },
        ],
      },
    ],
  },
];

export default experience;
