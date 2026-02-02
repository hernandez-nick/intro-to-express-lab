const express = require('express');

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


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
        number = parseInt(req.params.number, 20);
        roll = Math.floor(Math.random() * number);
        res.send(`You rolled a ${roll}`);        
    }
});

app.get('/collectible/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = collectibles[id];
    if (item) {
        res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    } else {
        res.send('This item is not yet in stock. Check back soon!');
    }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});