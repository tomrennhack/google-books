const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require ('mongoose')
const routes = require('./routes')

// middleware prep
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// heroku prep
if (process.env.NODE_ENV === "production") {
  /*Adds the react production build to serve react requests*/
  app.use(express.static(path.join(__dirname, "./client/build")));
}

// api routes
app.use(routes)

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});

// server is listening...
app.listen(PORT, () => {
  console.log(`API server now on port: ${PORT}!`);
});
