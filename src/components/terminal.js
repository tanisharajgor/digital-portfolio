import React from "react";
import experience from "../data/experience";
import "../styling/apple-code-view.css";

const OrgName = ({ org, links }) => {
  if (!links) return <span className="text-neon">{org}</span>;
  return links.map(({ label, href }, i) => (
    <React.Fragment key={href}>
      {i > 0 && <span className="text-gray-500"> & </span>}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-neon underline decoration-neon/40 underline-offset-4 transition-colors hover:decoration-neon"
      >
        {label}
      </a>
    </React.Fragment>
  ));
};

// The experience terminal: a macOS-style window "cat"-ing a timeline.
const Terminal = () => (
  <div className="code-card">
    <div className="code-card-bar">
      <div className="code-card-dots">
        <div className="code-card-dot code-card-dot-red" />
        <div className="code-card-dot code-card-dot-yellow" />
        <div className="code-card-dot code-card-dot-green" />
      </div>
      <span className="code-card-title">tanisha@portfolio: ~</span>
    </div>

    <div className="code-card-body">
      <p>
        <span className="text-green-400">➜</span>{" "}
        <span className="text-neon">~</span> cat where-ive-been.txt
      </p>

      {/* One continuous timeline: a node per group heading and per role,
          each row drawing the connector down to the next node. */}
      <ol className="mt-5">
        {experience.map(({ heading, items }, groupIndex) => (
          <React.Fragment key={heading}>
            <li className="timeline-row">
              <span className="timeline-node timeline-node-group" />
              <p className="text-purple-300">{heading}:</p>
            </li>
            {items.map(({ org, role, date, links }, i) => {
              const endsGroup =
                i === items.length - 1 && groupIndex < experience.length - 1;
              const isLatest = groupIndex === 0 && i === 0;
              return (
                <li
                  key={org}
                  className={`timeline-row ${endsGroup ? "timeline-row-gap" : ""}`}
                >
                  <span
                    className={`timeline-node ${isLatest ? "timeline-node-latest" : ""}`}
                  />
                  <div className="grid gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <span>
                      <OrgName org={org} links={links} />
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-200">{role}</span>
                    </span>
                    {date && (
                      <span className="text-gray-500 sm:text-right">{date}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </React.Fragment>
        ))}
      </ol>

      <p className="mt-3">
        <span className="text-green-400">➜</span>{" "}
        <span className="text-neon">~</span>{" "}
        <span className="animate-blink">▍</span>
      </p>
    </div>
  </div>
);

export default Terminal;
