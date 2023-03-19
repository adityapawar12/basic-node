const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form data
const upload = multer();
app.use(upload.array());

// Hello World API
app.get("/get-hello-world", (req, res) => {
  res.send("Hello World!");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
