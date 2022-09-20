const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const bookController =  require("../controllers/bookController");
//const reviewController =  require("../controllers/reviewController");




//~~~~~~~~~~~~~~~~~~~~~~~~~(POST API / createuser)~~~~~~~~~~~~~~~~~~~~~~~~~

router.post("/register", userController.createUser)

//~~~~~~~~~~~~~~~~~~~~~~~~~(POST API / loginuser)~~~~~~~~~~~~~~~~~~~~~~~~~

router.post("/login", userController.createUser)
