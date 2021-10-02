const express = require("express");
const router = express.Router();

const userRoute = require('./userRoutes');
const forecastRoutes = require('./forecastRoutes');

router.use('/api/v1/users', userRoute);
router.use('/api/v1/forecast', forecastRoutes);

module.exports = router