import express from "express";
var server = express();
server.use(express.json());
server.listen(5000, function () { return console.log("listen on ".concat(5000)); });
