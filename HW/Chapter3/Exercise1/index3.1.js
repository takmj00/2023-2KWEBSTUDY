const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const send = (req, res) =>{
    const obj = req.body;
    res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'));
};

app.get('/', (req, res) => {
    const obj = req.query;
    res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'));

})
app.post('/', send);
app.put('/', send);
app.delete('/', send);

app.listen(port, () => console.log(`Server listening on port ${port}!`));