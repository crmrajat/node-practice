const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.json([{ name: 'rajat' }, { name: 'ravi' }]);
});

app.listen(port, () => {
    console.log('🦹 server is listening on port ', port);
});
