const express = require("express");

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Rahul",
    course: "BCA"
  },
  {
    id: 2,
    name: "Priya",
    course: "B.Tech"
  }
];

// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Student API is running"
  });
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
});

const PORT = process.env.PORT || 3000;

// Only start server when this file is executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;