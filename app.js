const { rajat, bora } = require('./names');
const sayHi = require('./utils');
const x = require('./firstModule');
const os = require('os');
sayHi(rajat);
sayHi(bora);
sayHi('world');

console.log('🤷‍♂️', os.userInfo());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log('👆', currentOS);
