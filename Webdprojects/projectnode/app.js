const fs = require("fs");

const express = require("express");

const uuid = require("uuid");

const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  //   const htmlfilepath = path.join(__dirname, "views", "about.html");
  //   res.sendFile(htmlfilepath); //send file//css will note come because
  res.render("about");
});

app.get("/confirm", function (req, res) {
  //   const htmlfilepath = path.join(__dirname, "views", "confirm.html");
  //   res.sendFile(htmlfilepath); //send file//css will note come because
  res.render("confirm");
});
// very importand text in hresf always append
app.get("/index", function (req, res) {
  //   const htmlfilepath = path.join(__dirname, "views", "index.html");
  //   res.sendFile(htmlfilepath); //send file//css will note come because
  res.render("index");
});

app.get("/recommend", function (req, res) {
  //   const htmlfilepath = path.join(__dirname, "views", "recommend.html");
  //   res.sendFile(htmlfilepath); //send file//css will note come because
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const rc = req.body;
  rc.id = uuid.v4();
  //  uuid package
  const filepath = path.join(__dirname, "data", "restaurants.json");
  const filedata = fs.readFileSync(filepath);
  const storedrestaurants = JSON.parse(filedata);

  storedrestaurants.push(rc);

  fs.writeFileSync(filepath, JSON.stringify(storedrestaurants));

  res.redirect("/confirm");
});
//feature called templates;
app.get("/restaurants", function (req, res) {
  //   const htmlfilepath = path.join(__dirname, "views", "restaurants.html");
  //   res.sendFile(htmlfilepath); //send file//css will note come because
  let order = req.query.order;
  let nextorder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }
  if (order === "desc") {
    nextorder = "asc";
  }
  const filepath = path.join(__dirname, "data", "restaurants.json");

  const filedata = fs.readFileSync(filepath);

  //sort the restaurants we need query parameter

  const storedrestaurants = JSON.parse(filedata);

  storedrestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    }

    return -1;
  });

  res.render("restaurants", {
    numberofres: storedrestaurants.length,
    restaurants: storedrestaurants,
    nextorder: nextorder,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantid = req.params.id;
  const filepath = path.join(__dirname, "data", "restaurants.json");

  const filedata = fs.readFileSync(filepath);
  const storedrestaurants = JSON.parse(filedata);

  for (const restaurant of storedrestaurants) {
    if (restaurant.id === restaurantid) {
      return res.render("restaurants-details", { restaurant: restaurant });
    } else {
      res.render("404");

      // dedicated 404 page for
    }
  }
});

// app.use('/',defaultroutes)
// add page 404 at bottom
app.use(function (req, res) {
  res.render("404");
});
app.use(function (error, req, res, next) {
  res.render("500");
});
app.listen(1234);

// if we change id then time out will be shown

// const fs = require("fs"); //file system package

// const path = require("path");

// const express = require("express"); //guves express object
// // const express=require("express")

// const app = express();

// app.use(express.urlencoded({ extended: false })); //it helps to handle request

// app.get("/currenttime", function (req, res) {
//   res.send("<h1>" + new Date().toISOString() + "</h1>"); //format of date and time new Date().toISOString()
// }); //next can also be passed

// app.get("/", function (req, res) {
//   res.send(
//     '<form action="/store-user" method="POST"><label  >name</label><input type="text" name="username"></input><button></button></form>'
//   );
// });

// // node mon is only installed as a package in system not globally available

// app.post("/store-user", function (req, res) {
//   const name = req.body.username;

//   const filepath = path.join(__dirname, "data", "user.json");
//   //__dirname holds absolute path
//   const filedata = fs.readFileSync(filepath);

//   const existinguser = JSON.parse(filedata);

//   existinguser.push(name);
//   fs.writeFileSync(filepath, JSON.stringify(existinguser));

//   res.send("<h1> username stored</h1>");
// });

// app.get("/user", function (req, res) {
//   const filepath = path.join(__dirname, "data", "user.json");
//   const filedata = fs.readFileSync(filepath);
//   const existinguser = JSON.parse(filedata);
//   let responsedata = "<ul>";
//   for (const user of existinguser) {
//     responsedata += "<li>" + user + "</li>";
//   }
//   responsedata += "</ul>";
//   res.send(responsedata);
// });

// //static and dynamic  file so we are going to send html file
// app.listen(1234);

// // function handlerequest(request, response) {
// //   if (request.url === "/currenttime") {
// //     response.statusCode = 200;
// //     response.end("<h1>" + new Date().toISOString() + "</h1>"); //to create dynamic data
// //   } else if (request.url === "/") {
// //     response.statusCode = 200;
// //     response.end("<h1>hello world</h1>");
// //   } //holds part after domain
// //   //localhost:300/currenttime;
// // } //this will executed as a server get request

// // const server = http.createServer(handlerequest);

// // let username = "deepesh";
// // console.log(username);

// // server.listen(1234);
// // npm init
