const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const FILE = "data.json";

// Default route
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// Read data
const readData = () => {
  return JSON.parse(fs.readFileSync(FILE));
};

// Write data
const writeData = (data) => {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

// CREATE
app.post("/students", (req, res) => {
  let data = readData();
  const newStudent = { id: Date.now(), ...req.body };
  data.push(newStudent);
  writeData(data);
  res.json(newStudent);
});

// READ
app.get("/students", (req, res) => {
  res.json(readData());
});

// UPDATE
app.put("/students/:id", (req, res) => {
  let data = readData();
  data = data.map((s) =>
    s.id == req.params.id ? { ...s, ...req.body } : s
  );
  writeData(data);
  res.json({ message: "Updated" });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  let data = readData();
  data = data.filter((s) => s.id != req.params.id);
  writeData(data);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));