const router = require("express").Router();
const User = require("../modals/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ error: "Please Enter correct credential" });
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(404).json({ error: "Please Enter correct credential" });
    }
    const accesstoken = jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    },process.env.jwt_sec,{expiresIn:'3d'})

    const {password, ...other}= user._doc;
    
    return res
      .status(200)
      .json({...other, accesstoken});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
