const forecastController = require('../controller/forecastController');
const router = require("express").Router();

router.post("/getForecast", forecastController.getForecast);
router.post("/getCurrent", forecastController.getCurrent);

module.exports = router;