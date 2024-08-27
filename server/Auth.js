const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.port || 3000;

const users = [];

const SECRET_KEY = "random";

app.use(cors());
app.use(bodyParser.json());

//Register User

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  users.push({ username, email, password: hashedPassword });
  return res.json({ message: "User Registered Successfully" });
});

//User Login

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => email === u.email);

  if (!user) {
    return res.status(404).json({ message: "Invalid User" });
  }

  const isValid = bcrypt.compareSync(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid password or email" });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "15m",
  });

  res.json({ message: "User Login Successful", token });
});

//Protected Routes

app.get("/api/routes", (req, res) => {});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
