import React, { useRef, useState, useEffect } from "react";
import {
  SiTensorflow,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiRedis,
  SiDocker,
  SiKeras,
  SiAmazonwebservices,
  SiJavascript,
  SiCplusplus,
  SiKotlin,
  SiApachespark,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import "../styling/skills.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div>
      <Marquee pauseOnHover="true" autoFill="true">
        <div style={{ marginLeft: "20px", marginTop: "10px", display: "flex", gap: "20px" }}>
          <span className="bg-gray-800 text-orange-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-orange-400">
            <SiTensorflow style={{ marginRight: "5px" }} />
            TensorFlow
          </span>

          <span className="bg-gray-800 text-blue-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400">
            <SiPython style={{ marginRight: "5px" }} />
            Python
          </span>

          <span className="bg-gray-800 text-red-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-red-400">
            <FaJava style={{ marginRight: "5px", transform: "scale(1.2)" }} />
            Java
          </span>

          <span className="bg-gray-800 text-blue-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400">
            <SiMysql style={{ marginRight: "5px" }} />
            MySQL
          </span>

          <span className="bg-gray-800 text-white-400 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-white-400">
            <SiPostgresql style={{ marginRight: "5px" }} />
            PostgreSQL
          </span>

          <span className="bg-gray-800 text-green-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-green-400">
            <SiMongodb style={{ marginRight: "5px" }} />
            MongoDB
          </span>

          <span className="bg-gray-800 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-300">
            <SiReact style={{ marginRight: "5px" }} />
            React
          </span>

          <span className="bg-gray-800 text-yellow-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-yellow-300">
            <SiJavascript style={{ marginRight: "5px" }} />
            JavaScript
          </span>

          <span className="bg-gray-800 text-red-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-red-400">
            <SiRedis style={{ marginRight: "5px" }} />
            Redis
          </span>

          <span className="bg-gray-800 text-blue-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400">
            <SiDocker style={{ marginRight: "5px" }} />
            Docker
          </span>

          <span className="bg-gray-800 text-orange-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-orange-300">
            <SiAmazonwebservices style={{ marginRight: "5px" }} />
            AWS
          </span>

          <span className="bg-gray-800 text-blue-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400">
            <SiCplusplus style={{ marginRight: "5px" }} />
            C++
          </span>

          <span className="bg-gray-800 text-purple-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-purple-400">
            <SiKotlin style={{ marginRight: "5px" }} />
            Kotlin
          </span>

          <span className="bg-gray-800 text-orange-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-orange-500">
            <SiApachespark style={{ marginRight: "5px" }} />
            Spark
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
