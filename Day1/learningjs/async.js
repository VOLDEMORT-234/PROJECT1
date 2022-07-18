//errror handling middle walre

const fs = require("fs");
async function readfile() {
  //async function
  let filedata;
  //globally in block availale
  //   console.log("hi there");
  // if(error)
  //   filedata = fs.readFile("data.txt", function (error, filedata) {
  //     console.log(`file parsing done`);
  //     console.log(filedata.toString());
  //     // start another async task
  //     // more and more call bank funciton is require

  //   });

  try {
    filedata = await fs.readFile("data.txt");
  } catch {
    console.log("deepesh");
  }
  // .then(function (filedata) {
  //   console.log(`file parsing done`);
  console.log(filedata.toString());
  //   return anotherasyncmethod;
  // })
  // .then(function () {})
  // .catch(function (error) {
  //   console.log(error);
  // });
  //if error occur in this then it will be executed in catch
  //gives error in asyncronous

  //to string helps to convert in human readable form
}

readfile();
