const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('you are at the home page !');
    } else {
        res.end('you are lost !');
    }
});

server.listen(5000, () => {
    console.log('👉server is running on port 5000 . . . ');
});
