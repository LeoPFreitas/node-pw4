const express = require('express');
const routes = require('./routes');

let app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/", routes);

const db = require('./models');

db.sequelize.sync({force: true}).then(r => r);

app.listen(PORT, () => {
    console.log(`Application is listening ot port ${PORT}`);
});