const { error } = require('console');
const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () =>{
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'start.txt'), 'utf-8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname,'start.txt'));

    await fsPromises.writeFile(path.join(__dirname,'PromiseWrite.txt'),data);
    await fsPromises.appendFile(path.join(__dirname,'PromiseWrite.txt'),'\n\n Hi Anna! ');
    await fsPromises.rename(path.join(__dirname,'PromiseWrite.txt'), path.join(__dirname,'PromiseComplete.txt'));
    const newdata = await fsPromises.readFile(path.join(__dirname,'PromiseComplete.txt'),'utf-8');
    console.log(newdata);
  }catch(err) {
    console.error(err);
  }
}

fileOps();

// fs.readFile(path.join(__dirname,'start.txt'), 'utf-8' ,(err,data)=>{
//   if (err) throw err;
//   console.log(data);
// });



// fs.writeFile(path.join(__dirname,'new.txt'), 'Nice to meet you' ,(err)=>{
//   if (err) throw err;
//   console.log("Write complete");

//        fs.appendFile(path.join(__dirname,'new.txt'), '\n\n haa nice to meet you too!' ,(err)=>{
//           if (err) throw err;
//           console.log("append complete");
//         });

//   fs.rename(path.join(__dirname,'new.txt'), 'new1.txt' ,(err)=>{
//     if (err) throw err;
//     console.log("rename complete");
//   });
// });

// exit on uncaught errors

process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})