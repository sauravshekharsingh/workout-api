const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db.config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes setup
app.use("/", require("./src/routes/index.routes"));

// Set up server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
