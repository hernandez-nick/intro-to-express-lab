const express = require('express');

const app = express();
let roll;
let number;

app.get('/', (req, res) => {
  res.send('Welcome to Intro to Express Lab!');
});


app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`What a delight it is to see you once more, ${username}!`);
    });

app.get('/roll/:number', (req, res) => {
    if (roll !== number) {
        console.log('You must specify a number');
    } else {
        const number = parseInt(req.params.number);
        res.send(`You rolled a ${number}`);
    }
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});