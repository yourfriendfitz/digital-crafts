const express = require("express");
const router = express.Router();
const ApiController = require("./apiController");
const controller = new ApiController();

router.get("/", controller.getAll);
