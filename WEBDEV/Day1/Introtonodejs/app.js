const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express(); //express is a function we can call

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
//this public folder is noew public to all users

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  const filepath = path.join(__dirname, "data", "restaurant.json");
  const filedata = fs.readFileSync(filepath);
  const storedrestaurant = JSON.parse(filedata);
  res.render("index", { nof: storedrestaurant.length }); //very important to make dynamic
});

//function recive a response object and request object

app.get("/tictok", function (req, res) {
  const htmlfilepath = path.join(__dirname, "views", "index.html"); //you can define more html files like this
  //also change href of the main file with "/restaurant"
  res.sendFile(htmlfilepath);
});

app.post("/tictok", function (req, res) {
  const restaurentname = req.body;
  const filepath = path.join(__dirname, "data", "restaurant.json");
  const filedata = fs.readFileSync(filepath);
  const storedrestaurant = JSON.parse(filedata);

  storedrestaurant.push(restaurentname);

  fs.writeFileSync(filepath, JSON.stringify(storedrestaurant));

  res.redirect("/");
});

// ************************************************************************************************************************************

// dynamic root

app.listen(2444);

// const fs = require("fs");
// const http = require("http"); //we are calling a object
// const express = require("express");

// const path = require("path");

// const app = express();
// app.use(express.urlencoded({ extended: false }));

// app.get("/currenttime", function (request, response) {
//   response.send("<h1>" + new Date().toISOString() + "</h1>");
// });
// //first value is path

// app.get("/", function (req, res) {
//   res.send(
//     '<form action="/deepesh" method="POST"><label>your name : </label><input type="text" name="username"><button>submit</button></form>' //GET ,POST both valid use POST TO Send data from browser to server
//   );
// });

// app.post("/deepesh", function (req, res) {
//   const username = req.body.username;
//   const filepath = path.join(__dirname, "data", "users.json");

//   const filedata = fs.readFileSync(filepath);
//   const existinguser = JSON.parse(filedata);
//   existinguser.push(username);
//   fs.writeFileSync(filepath, JSON.stringify(existinguser));
//   res.send("<h1>username stored</h1>");
// });
// app.get("/users", function (req, res) {
//   const filepath = path.join(__dirname, "data", "users.json");

//   const filedata = fs.readFileSync(filepath);

//   const existinguser = JSON.parse(filedata);

//   let responsedata = "<ul>";
//   for (const user of existinguser) {
//     responsedata += "<li>" + user + "</li>";
//   }

//   responsedata += "</ul>";

//   res.send(responsedata);
// });

// app.listen(2444);

// // function handleincoming(request, response) {
// //   if (request.url === "/currenttime") {
// //     response.statusCode = 200;
// //     response.end("<h1>" + "HELLO WORLD" + "</h1>");
// //   } else if (request.url === "/") {
// //     response.statusCode = 200;
// //     response.end("<h1>" + new Date().toISOString() + "</h1>");
// //   }
// // statusCode the rewuest have beign succeded or not
// // 200
// // 404 client side error
// // 401 client side error
// // 500 server side error
// // }

// // //type localhost:1402
// // //type localhost:1402/currenttime    //path should be of lower case

// // const server = http.createServer(handleincoming); //create a web server returns a object that has server functionality

// // server.listen(1402);

// // amazon.com => sends request to amazon server that comes back
// // amazon.com:80 //port send to server
// //npm command install thrid party  package for more inside
