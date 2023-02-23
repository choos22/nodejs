import express from "express"
// import expressLayout from "express-ejs-layouts";

let configViewsEngine = (app) => {
    // app.use(expressLayout)
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views" , "./src/views")
 
}

module.exports = configViewsEngine