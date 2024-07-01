const express = require('express');
const app = express();

const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    password: 'Himel1234',
    host: "localhost",
    database: "HELLO"
})

app.get('/avangers', (req, res)=>{
    db.query('SELECT * FROM HELLO', (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

app.listen(3001, ()=>{
    console.log('running at port 3001');
})