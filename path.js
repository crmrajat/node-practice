const path = require('path');

const filePath = path.join('/parent', 'child', 'component.js');
console.log('🚀 ~ filePath:', filePath);

const base = path.basename(filePath);
console.log('🚀 ~ base:', base);

const absolute = path.resolve(__dirname, filePath);
console.log('🚀 ~ __dirname:', __dirname);
console.log('🚀 ~ absolute:', absolute);
