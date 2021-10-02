const axios = require('axios');

exports.getForecast = async (req, res) => {
    const apiToken = req.body.apiToken

    if (!apiToken) {
        res.status(400).send({
            message: 'Invalid body request. API token cannot be null.'
        });
        return;
    }

    const q = req.body.q || "São Paulo"
    const days = req.body.days || 1
    const aqi = req.body.aqi || 'no'

    let forecast = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiToken}`, {
        params: {
            q: q,
            days: days,
            aqi: aqi,
            alerts: 'no'
        }
    })
        .then(resp => resp.data)
        .catch(err => err)

    res.json(forecast);
}

exports.getCurrent = async (req, res) => {
    const apiToken = req.body.apiToken

    if (!apiToken) {
        res.status(400).send({
            message: 'Invalid body request. API token cannot be null.'
        });
        return;
    }

    const q = req.body.q || "São Paulo"
    const aqi = req.body.aqi || 'no'

    let forecast = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiToken}`, {
        params: {
            q: q,
            aqi: aqi,
        }
    })
        .then(resp => resp.data)
        .catch(err => err)

    res.json(forecast);
}