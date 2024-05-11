import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../Styles/ExamForm.css";
import { ToastContainer } from "react-toastify";
import axios from "axios"


function ExamForm() {
  
  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentGender, setStudentGender] = useState("default");
  const [preferredMode, setPreferredMode] = useState("default");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/examForm", {  // Update the URL to match your backend
        studentName,
        studentNumber,
        studentGender,
        preferredMode,
      });
      alert("Exam is getting Ready !!!")
      navigate("/examportal")
      // Reset form fields
      setStudentName("");
      setStudentNumber("");
      setStudentGender("default");
      setPreferredMode("default");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="exam-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Abhyasa <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Take Mock Test</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Candidates Full Name:
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
            
          </label>

          <br />
          <label>
            Candidates Phone Number:
            <input
              type="text"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              required
            />
            
          </label>

          <br />
          <label>
            Candidates Gender:
            <select
              value={studentGender}
              onChange={(e) => setStudentGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">Others</option>
            </select>
            
          </label>

          <br />
          {/* <label>
            Preferred Test Time:
            <input
              type="datetime-local"
              value={examTime}
              onChange={(e) => setExamTime(e.target.value)}
              required
            />
            {formErrors.examTime && <p className="error-message">{formErrors.examTime}</p>}
          </label> */}

          <br />
          <label>
            Preferred Subject:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="select">Machine Learning</option>
              
            </select>
            
          </label>

          <br />
          <button type="submit" className="text-exam-btn" >
            Confirm Test
          </button>

          
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Abhyasa . All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default ExamForm;