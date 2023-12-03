// app.js
require("dotenv").config();
const express = require("express");
const app = express();
const Connection = require("./db/database/db.js"); // Import the Connection function
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");

// ...

const port = 8009;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password); // Use the Connection function

app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});
