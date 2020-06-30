//import Router framework and model file
const router = require("express").Router();
let Food = require("../models/food.model");

//get request returns foods
router.route("/").get((req, res) => {
  Food.find()
    .then((foods) => res.json(foods))
    .catch((err) => res.status(400).json("Error: " + err));
});

//post request and adds food item
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;

  const newFood = new Food({ username, title, description, image });

  newFood
    .save()
    .then(() => res.json("Food added!"))
    .catch(() => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Food.findById(req.params.id)
    .then((food) => res.json(food))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json("Food deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Food.findById(req.params.id).then((food) => {
    food.username = req.body.username;
    food.image = req.body.image;
    food.description = req.body.description;
    food.title = req.body.title;

    food
      .save()
      .then(() => res.json("Food updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
