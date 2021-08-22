// import React from "react";
// import Bio from "./Bio";
// import Links from "./Links";
// import "./Profile.style.css";
// import Skills from "./Skills";

// const Profile = () => {
//   return (
//     <div className="Container">
//       <h2>User Profile</h2>
//       <hr />
//       <Bio name="Md. Abu Hosen Shawon" title="Frontend dev" />
//       <Skills />
//       <Links />
//     </div>
//   );
// };

// export default Profile;

import React, { Component } from "react";
import Bio from "./Bio";
import Links from "./Links";
import "./Profile.style.css";
import Skills from "./Skills";

class Profile extends Component {
  me = {
    name: "Abu Hosen Shawon",
    title: "Software Engineering Student | Front End Developer",
    skillA: "PHP",
    skillB: "JavaScript",
    skillC: "React JS",
  };

  render() {
    console.log("Profile - ", this.props);
    return (
      <div className="Container">
        <h2>User Profile</h2>
        <hr />
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links />
      </div>
    );
  }
}

export default Profile;
