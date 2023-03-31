// There are two ways to read and write - asynchronous and synchronous methods
// asynchronous is non blocking and synchronous is blocking

const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

// Synchronous

mainSync = () => {
    const first = readFileSync('./content/first.txt', 'utf8');
    console.log('🚀 ~ first:', first);
    const second = readFileSync('./content/second.txt', 'utf8');
    console.log('🚀 ~ second:', second);

    writeFileSync(
        './content/result-sync.txt',
        `Here is the combined result ${first} , ${second}`,
        { flag: 'a' }
    );
};

mainAsync = () => {
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('😟', err);
            return;
        }
        const first = result;

        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log('🦷', err);
                return;
            }
            const second = result;

            writeFile(
                './content/result-async.txt',
                `Here is the combined result ${first} , ${second}`,
                (err, result) => {
                    if (err) {
                        console.log('🌂', err);
                        return;
                    }
                    console.log('😾', result);
                }
            );
        });
    });
};
// mainSync();
mainAsync();
