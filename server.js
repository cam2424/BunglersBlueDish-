// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty Arrays for Tables and Waiting List
// =============================================================
const tables = [];
const waitlist = [];
const reservations = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
// Basic route that sends the user first to the make reservation Page
app.get("/makereservation", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

// Displays tables
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
    });
  