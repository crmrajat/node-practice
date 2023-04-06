const express = require('express');
const app = express();

const port = 5000;
const { people, products } = require('./data');

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href="/api/products">Products List</a>
    `);
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});
app.get('/api/products/:productId', (req, res) => {
    console.log('🧙‍♂️', req);
    const { productId } = req.params;
    const singleProduct = products.find(
        (item) => item.id === Number(productId)
    );
    if (!singleProduct) {
        res.status(404).send('Product does not exist');
    }
    res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((item) => {
            return item.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});

app.get('*', (req, res) => {
    res.send(`
    <h1>Error Page not found</h1>
    <a href="/">Go Home</a>
    `);
});

app.listen(port, () => {
    console.log('🦹 server is listening on port ', port);
});
