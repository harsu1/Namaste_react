import User from "./user";
import UserClass from "./UserClass";
import { Component } from "react";

const About = () => {
  return (
    <div class="text-center m-4 p-4">
      <h1 class="text-2xl text-orange-500 font-bold">User Profile</h1>
      <h2 className="text-lg "> This is User Profile </h2>
      <div class="m-4 p-4 ">
        <p class="text-justify font-bold mr-7 text-cyan-600">
          Hello, I’m Harsh Sahu, a B.Tech graduate in Computer Science
          Engineering in full-stack development. I have strong skills in
          JavaScript, ReactJS, NodeJS, Express, and MongoDB, gained through
          diverse projects. I’m committed to continuous learning and aim to
          excel as a full-stack developer.
        </p>
      </div>

      <UserClass />
    </div>
  );
};
export default About;
