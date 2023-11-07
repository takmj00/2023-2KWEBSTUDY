const express = require('express');
const {runQuery} = require('./database')
const port = 3000;
const app = express();

app.get('/fare', async (req, res) => {
    const {uid} = req.query;
    const name = await runQuery(`SELECT name FROM users where id = ${uid}`)
    const sql = `SELECT Round(Sum(types.fare_rate * trains.distance)/1000, -2) AS total
                FROM tickets INNER JOIN trains ON tickets.train = trains.id 
                INNER JOIN types ON types.id = trains.type
                WHERE tickets.user = ${uid}`;
    const total = await runQuery(sql);
    
    res.send(`Total fare of ${name[0].name} is ${total[0].total} KRW.`);
});

app.get('/train/status', async (req, res) => {
    const {tid} = req.query;
    const sql = `SELECT max_seats, Count (*) AS sold FROM trains
            INNER JOIN types ON types.id = trains.type
            INNER JOIN tickets ON tickets.train = trains.id
            WHERE trains.id = ${tid}`;
    const results = await runQuery(sql);
    const {max_seats, sold} = results[0];
    if (max_seats == sold) 
        res.send(`Train ${tid} is sold out`);
    
    else
        res.send(`Train ${tid} is not sold out`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
