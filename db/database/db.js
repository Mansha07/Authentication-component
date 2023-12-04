// db.js
const mongoose = require("mongoose");

function Connection(username, password) {
  // Your database connection logic here
  const dbURL = `mongodb+srv://manshabatra0709:a6FC92d842PE8WYG@cluster0.s6kyyqr.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error(`Database connection error: ${err}`);
  });

  db.once("open", () => {
    console.log("Database connected successfully");
  });
}

module.exports = Connection;

