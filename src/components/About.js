import React from "react";
import user from "../data/user";
import Links from "../components/Links.js";

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links />
    </div>
  );
}
About(user.bio)

export default About;
