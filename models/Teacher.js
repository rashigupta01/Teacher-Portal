const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
  },
  dateOfJoining: {
    type: Date,
  },
  dateOfBirth: {
    type: Date,
  },
  currentSchool: {
    type: String,
  },
  currentClass: {
    type: String,
  },
  employeeId: {
    type: String,
  },
  schoolState: {
    type: String,
  },
  schoolDistrict: {
    type: String,
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
