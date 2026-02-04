const express = require('express');

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];


const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to Intro to Express Lab!');
});


app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`What a delight it is to see you once more, ${username}!`);
    });


app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number);
    if (isNaN(number)) {
        return res.send('You must specify a number.');
    }
    const roll = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${roll}`);
});


app.get('/collectible/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const item = collectibles[index];
    if (item) {
        res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);
    } else {
        res.send('This item is not yet in stock. Check back soon!');
    }
});

app.get('/shoes/query', (req, res) => {
    const type = req.query.type;
};



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});