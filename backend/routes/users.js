const router = require("express").Router();
const mongoose = require('mongoose');
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const profilePic = req.body.profilePic;

  const newUser = new User({ username, password, name, email, profilePic });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route('/updateLikes/:id').post(function(req,res){
  User.findByIdAndUpdate(req.params.id,{likes: req.body.likes},{new:true}, (err, result)=>{
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  })
})
router.route('/updateProfilePic/:id').post(function(req,res){
  User.findByIdAndUpdate(req.params.id,{profilePic: req.body.profilePic},{new:true}, (err, result)=>{
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  })
})
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
