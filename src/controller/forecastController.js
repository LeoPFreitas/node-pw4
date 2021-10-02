const { getForecast, getCurrent } = require('../service/forecastService');

exports.getForecast = (req, res) => {
    getForecast(req, res).then(r => r);
};

exports.getCurrent = (req, res) => {
    getCurrent(req, res).then(r => r);
};