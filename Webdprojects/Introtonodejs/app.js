const http = require("http"); //we are calling a object

function handleincoming(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;                       
    response.end("<h1>" + "HELLO WORLD" + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  }
  // statusCode the rewuest have beign succeded or not
  // 200
  // 404 client side error
  // 401 client side error
  // 500 server side error
}

//type localhost:1402
//type localhost:1402/currenttime    //path should be of lower case

const server = http.createServer(handleincoming); //create a web server returns a object that has server functionality

server.listen(1402);

// amazon.com => sends request to amazon server that comes back
// amazon.com:80 //port send to server
