import React from "react";
import InformationCard from "./InformationCard";
import { faLaptop, faRobot, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Why to choose us?</span>
        </h3>
        <p className="info-description">
          Discover our education website, pioneering online proctoring, diverse assessment methods, 
          randomized exam questions, and a rich array of assignments. Revolutionize your learning journey with 
          cutting-edge features designed to optimize your academic success.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="AI-driven Cheating Detection"
          description="
          Our platform uses AI algorithms to spot cheating 
          in real-time during online exams, ensuring fairness 
          and integrity for all students. Experience secure testing 
          with advanced technology at your fingertips."
          icon={faRobot}
        />

        <InformationCard
          title="Virtual proctoring"
          description="
          We combine computer vision and machine learning to 
          remotely monitor exam sessions, ensuring integrity and fairness 
          in online assessments. Experience the seamless integration of 
          advanced technologies for secure and reliable exam proctoring."
          icon={faLaptop}
        />

        <InformationCard
          title="Fairness Assurance systems"
          description="We implement robust systems to ensure students are
           graded authentically, prioritizing comprehension and effort
            over cheating effectiveness. Our innovative evaluation methods focus 
            on critical thinking and creativity, empowering students to 
            showcase their true skills."
          icon={faRankingStar}
        />
      </div>
    </div>
  );
}

export default Info;
