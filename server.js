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
    let msg;
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        msg = 'You must specify a number.';
    } else {
        const roll = Math.floor(Math.random() * number) + 1;
        msg = `You rolled a ${roll}.`;
    }
    res.send(msg);
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


app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;

    if (req.query['min-price']) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(req.query['min-price'])); }
    
    if (req.query['max-price']) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(req.query['max-price'])); }
    
    if(req.query.type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type)}
    
    res.json(filteredShoes);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});