import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../styling/card.css";

const Tag = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-blue-300/60 bg-blue-300/5 px-2.5 py-0.5 text-xs font-medium text-blue-300">
    {label}
  </span>
);

// Each link opens its own thing (demo, paper, repo...), so the card itself isn't a link.
const ProjectCard = ({ title, status, links = [], description, tags }) => (
  <div className="project-card">
    <div className="project-card-inner">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
        {(status || links.length > 0) && (
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 sm:mt-1 sm:justify-end">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-sm font-semibold text-white transition-colors hover:text-neon"
              >
                {label}
                <FiArrowUpRight size={15} />
              </a>
            ))}
            {status && (
              <span className="rounded-full border border-green-400/40 bg-green-400/5 px-2 py-0.5 font-mono text-xs text-green-300">
                {status}
              </span>
            )}
          </div>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-300">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
