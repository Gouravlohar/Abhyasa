const mongoose = require('mongoose');

const ExamFormSchema = new mongoose.Schema({
    studentName: String,
    studentNumber: String,
    studentGender: String,
    preferredMode: String,
  });

module.exports = mongoose.model("Examform", ExamFormSchema );

