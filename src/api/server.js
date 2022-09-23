const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();
let mongoose;

try {
    mongoose = require("mongoose");
}   catch (e) {
    console.log(e);
}

// error timeout
const TIMEOUT = 10000;

//error handler
app.use(function (err, req, res, next){
    if (err) {
        res.status(err.status || 500)
        .type("txt")
        .send(err.message || "SERVER ERROR");
    };
});

// unmatched routes handler
app.use(function (req, res) {
    if (req.method.toLowerCase() === "options") {
        res.end();
    } else {
        res.status(404).type("txt").send("Not Found");
    }
});


// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 
app.get("/api", (req, res) => {

})




// listen on port 3001 or PORT variable
const listener = app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});