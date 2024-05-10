import React from "react";

import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
    return (
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Doctor} alt="Doctor Group" className="about-image1" />
        </div>
  
        <div className="about-text-content">
          <h3 className="about-title">
            <span>About Us</span>
          </h3>
          <p className="about-description">
            "Welcome to our online exam platform, 
            where innovation meets education. With AI-powered cheating detection
            and remote proctoring, we ensure integrity and fairness in every exam.
            Experience authentic grading that prioritizes comprehension and creativity,
            empowering students to excel."
          </p>
  
          <h4 className="about-text-title">Our Mission</h4>
  
          <SolutionStep
            title="Discover Excellence"
            description="With uncompromising security measures and a zero-tolerance policy towards cheating, our exams ensure fairness and accuracy in identifying the true stars and setting them apart from the crowd."
          />
  
          <SolutionStep
            title="Know more About Yourself"
            description="Unlock your true potential through exams and delve into the depths of self-discovery with detailed exam results as your guiding light."
          />
          
        </div>
      </div>
    );
  }
  
  export default About;