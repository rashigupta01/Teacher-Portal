const express = require("express");
const router1 = express.Router();
const TeacherData = require("../models/Teacher");

router1.get("/getData", async (req, res) => {
  try {
    const data = await TeacherData.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router1.put("/updateData", async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      dateOfJoining,
      dateOfBirth,
      currentSchool,
      currentClass,
      employeeId,
      schoolState,
      schoolDistrict,
    } = req.body;

    const data = await TeacherData.findOneAndUpdate(
      { employeeId },
      {
        name,
        email,
        phoneNumber,
        dateOfJoining,
        dateOfBirth,
        currentSchool,
        currentClass,
        schoolState,
        schoolDistrict,
      },
      { new: true }
    );
    return res.status(200).json({
      msg: `Details for employee ${employeeId}  updated successfully`,
      data,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router1.post("/addData", async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      dateOfJoining,
      dateOfBirth,
      currentSchool,
      currentClass,
      employeeId,
      schoolState,
      schoolDistrict,
    } = req.body;

    const data = new TeacherData({
      employeeId,
      name,
      email,
      phoneNumber,
      dateOfJoining,
      dateOfBirth,
      currentSchool,
      currentClass,
      schoolState,
      schoolDistrict,
    });

    const result = await data.save();
    return res.status(200).json({
      msg: `Details for employee ${employeeId}  added successfully`,
      result,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router1;
