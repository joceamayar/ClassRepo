const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.get("/cars", carRoutes),

module.exports = router;
