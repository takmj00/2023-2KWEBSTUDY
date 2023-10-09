const express = require('express');

const port = 3000;
const app = express();

app.get('/factorial', (req, res) => {
    const {number} = req.query;
    res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const num = parseInt(req.params.number);
    let ret = 1;
    for (let i = 0; i < num; i++)
        ret *= (i+1);
    res.send(`${ret}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
