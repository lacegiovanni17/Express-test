const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (request, response) {
    res.send("Contact me at: dk1online25@gmail.com");
}); 

app.get("/about", function (request, response) {
    res.send("I am a software engineer with 5 years experience");
})
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
