const express = require("express");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

// app.use(logger);

// get all the members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(404);    
  }
});

// set a static folder
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server stated on port ${PORT}`);
});
