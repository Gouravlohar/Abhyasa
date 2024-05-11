import React, { useEffect, useState } from "react";
import image from "../Assets/image-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTakeExamClick = () => {
    navigate("/exam");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container"id="home">
      <div className="hero-section">
        <div className="text-section">
          
          <h2 className="text-title">
            Experience the new way of Examination
          </h2>
          <p className="text-descritpion">
            Step into the virtual exam hall where learning meets innovation! Our online platform offers a seamless 
            experience for mock tests and exams, delivering detailed results with insightful feedback. Embrace the
            future of education with us, where every click leads to knowledge and growth.
          </p>
          <button
            className="text-exam-btn"
            type="button"
            onClick={handleTakeExamClick}
          >
            <FontAwesomeIcon icon={faFileLines} /> Take mock test
          </button>
          
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={image} alt="hero" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
