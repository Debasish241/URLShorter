const express = require("express");
const {
  handleGenerateNewShortURL,handleGetAnalytics, handlegenerateNewShortURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handlegenerateNewShortURL);
router.get("/analytics/:shortId",handleGetAnalytics)
 
module.exports = router;
