const express = require('express');

const app = express();

app.use('/',(req, res) => {
    res.send("Hello from dashboard")
});

app.use('/test',(req, res) => {
    res.send("Hello from test")
});

app.listen(7777, () => {
    console.log("App is listening on port 3000")
});


