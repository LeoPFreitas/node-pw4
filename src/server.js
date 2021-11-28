const express = require('express');
const routes = require('./routes');
const cors = require("cors");

let app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(cors())

app.use("/", routes);

const db = require('./models');

db.sequelize.sync({force: false}).then(r => r);

app.listen(PORT, () => {
    console.log(`Application is listening ot port ${PORT}`);
});