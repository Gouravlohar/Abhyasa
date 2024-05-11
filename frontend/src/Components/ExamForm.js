import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/ExamForm.css";
import { ToastContainer, toast } from "react-toastify";

function ExamForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentGender, setStudentGender] = useState("default");
  // const [examTime, setExamTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!studentName.trim()) {
      errors.studentName = "Student name is required";
    } else if (studentName.trim().length < 6) {
      errors.studentName = "Student name must be at least 6 characters";
    }

    if (!studentNumber.trim()) {
      errors.studentNumber = "Student phone number is required";
    } else if (studentNumber.trim().length !== 10) {
      errors.studentNumber = "Student phone number must be of 10 digits";
    }

    if (studentGender === "default") {
      errors.studentGender = "Please select student gender";
    }
    // if (!examTime) {
    //   errors.examTime = "Exam time is required";
    // } else {
    //   const selectedTime = new Date(examTime).getTime();
    //   const currentTime = new Date().getTime();
    //   if (selectedTime <= currentTime) {
    //     errors.examTime = "Please select a future exam time";
    //   }
    // }
    // if (preferredMode === "default") {
    //   errors.preferredMode = "Please select preferred mode";
    // }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setStudentName("");
    setStudentNumber("");
    setStudentGender("default");
    //setExamTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Exam Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
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
            {formErrors.studentName && <p className="error-message">{formErrors.studentName}</p>}
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
            {formErrors.studentNumber && <p className="error-message">{formErrors.studentNumber}</p>}
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
            {formErrors.studentGender && <p className="error-message">{formErrors.studentGender}</p>}
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
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-exam-btn">
            Confirm Test
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Exam details has been sent to the students phone number via SMS.</p>
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