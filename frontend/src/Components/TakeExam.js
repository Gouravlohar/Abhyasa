import React from "react";
import image from "../Assets/image-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/TakeExam.css";

function TakeExam() {
  const navigate = useNavigate();

  const handleTakeExamClick = () => {
    navigate("/exam");
  };

  return (
    <div className="ba-section" id="exam">
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Take Exam</span>
        </h3>
        <h3 className="ba-description">
          <span>Vital Reminders</span>
        </h3>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Sit Where It's Bright
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Avoid multiple face
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Avoid Electronic Objects
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Avoid crowded area 
        </p>

        <button
          className="text-exam-btn"
          type="button"
          onClick={handleTakeExamClick}
        >
          <FontAwesomeIcon icon={faFileLines} /> Take Exam
        </button>
      </div>

      <div className="ba-image-content">
        <img src={image} alt="Group" className="ba-image1" />
      </div>
    </div>
  );
}

export default TakeExam;