const express = require("express");
const serverless = require("serverless-http"); 
const nodemailer = require('nodemailer');
const qs = require('qs');

const app = express();
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, query');
  next();
});
//:    /.netlify/functions/api
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});
//:   /.netlify/functions/api/test
router.get("/test", (req, res) => {
  res.send("hello world");
});



//:   /.netlify/functions/api/send-email
router.post("/send-email", async (req, res) => {
 
});

app.use(`/.netlify/functions/api`, router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use qs middleware to parse complex query parameters
app.use((req, res, next) => {
  req.query = qs.parse(req.query);
  next();
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, query');
  next();
});

module.exports = app;
module.exports.handler = serverless(app);