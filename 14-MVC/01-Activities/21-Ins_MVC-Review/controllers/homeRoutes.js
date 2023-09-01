const router = require('express').Router();
const {user} = require("../models")
router.get('/', async (req, res) => {
  let users = await User.findAll();
  users = users.map(users=> user.get({plain:true}));
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {user.users});// referes to the views home page 
});

module.exports = router;


//to pass homepage data in this page then you render the data in he
