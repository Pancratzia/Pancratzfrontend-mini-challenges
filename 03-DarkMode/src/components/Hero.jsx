import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello, world!</h1>
          <p className="py-6">
          My name is <span className="line-through opacity-20">Pancratzia</span> Laura Ortega and I'm a Web Developer. I'm creating mini frontend projects to practice my skills with different technologies. You can check out my projects below.
          </p>
          <a href="https://github.com/Pancratzia/frontend-mini-challenges" target="_blank" className="btn btn-primary">My Repository</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
