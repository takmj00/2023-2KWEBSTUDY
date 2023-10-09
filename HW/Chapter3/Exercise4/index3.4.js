const express = require('express');

const port = 3000;
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.render('login.pug');
});

app.post('/login', (req,res) => {
    let ret = `${req.body['username']}\n${req.body['password']}`;
    res.send(ret);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

