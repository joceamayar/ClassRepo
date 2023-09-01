const router = require('express').Router();
const {user} = require("../models")

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  let users = await User.findAll();
  orde:[['nam','ASC'],
  ]
]); 
  users = users.map(users => user.get({ plain: true }));

  res.render('homepage', {user});
});

module.exports = router;
