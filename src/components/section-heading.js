import React from "react";

const SectionHeading = ({ subtitle, children }) => (
  <div className="mb-10">
    <h2 className="flex items-center gap-4 text-2xl font-bold text-white sm:text-3xl">
      {children}
      <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
    </h2>
    {subtitle && <p className="mt-2 text-sm text-gray-400">{subtitle}</p>}
  </div>
);

export default SectionHeading;
