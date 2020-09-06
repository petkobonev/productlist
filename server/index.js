const express = require('express');
const path = require('path');
const products = require('./Products')

const app = express();


const logger = (req, res, next) => {
    console.log('Hello');
    next();
}

let orders = [];


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger)

app.get('/api/products', (req, res) => res.json(products))

app.post('/api/products', (req, res) => {

    const newOrder = {
        Id: req.body.id,
        Title: req.body.title,
        Price: req.body.price
    };

    orders.push(newOrder);
    console.log(orders);
    res.json(orders)



});


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port', PORT));
