const express = require('express');

let app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Application is listening ot port ${PORT}`);
});