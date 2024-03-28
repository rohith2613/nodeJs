const fs =  require('fs');


const rs = fs.createReadStream('./lorem.txt',{encoding: 'utf-8'});

const ws = fs.createWriteStream('./new-lorem.txt');
const ws1 = fs.createWriteStream('./new1111-lorem.txt');

rs.pipe(ws1);