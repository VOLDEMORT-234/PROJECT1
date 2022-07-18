//errror handling middle walre

const fs = require("fs");

function readfile() {
  let filedata; //globally in block availale
  try {
    const filedata = fs.readFileSync("data.json"); //if error occur in this then it will be executed in catch
    // fiile data is availabe only in try block
  } catch (error) {
    console.log("An error occurred");
  }

  console.log("hi there");
  console.log(filedata);
}

// throw { message: "something just like this" }; //gives error

readfile();


// 