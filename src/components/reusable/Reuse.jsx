import React from "react";
import Bio from "../profile/Bio";
import Skills from "../profile/Skills";

const Reuse = () => {
  return (
    <div>
      <div className="Container">
        <h2>Reuse Component 1</h2>
        <hr />
        <Bio name="Mr. Shawn Michaels" title="Mr WrestleMania" />
        <Skills skillA="Top Rope" skillB="Sweet Chin Music" />
      </div>
      <div className="Container">
        <h2>Reuse Component 2</h2>
        <hr />
        <Bio name="CM Punk" title="Best in the World" />
        <Skills
          skillA="Mike Skill"
          skillB="Go To Sleep"
          skillC="Anaconda Vise"
        />
      </div>
    </div>
  );
};

export default Reuse;
