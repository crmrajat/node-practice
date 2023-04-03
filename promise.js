// This file is has some error 😥

const { readFile, writeFile } = require('fs');

// read the file
const first = readFile('./content/first.txt', 'utf-8', (err, res) => {
    console.log('🖕', res);
});

// add new data to it and save it
writeFile('./content/first.txt', '💹');
