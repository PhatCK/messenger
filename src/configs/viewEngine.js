import express from "express";
import ejs from "ejs"; // Import the ejs module

let configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs'); // Set the view engine to 'ejs'
    app.set("views", "./src/views/"); // Correct the property name to 'views'
}

export default configViewEngine;