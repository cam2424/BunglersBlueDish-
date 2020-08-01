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
const customers = [
    {
        id: "",
        name: "",
        email: "",
        phone: ""
    }
];
const waitlist = [];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
// Basic route that sends the user first to the make reservation Page
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

// Displays tables and reservations
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
    });

// Displays all table json
app.get("/api/customers", function(req, res) {
  return res.json(customers);
});

// post to list
app.post("/api/customers", function(req, res) {
   // req.body hosts is equal to the JSON post sent from the user ??
  // This works because of our body parsing middleware ***********??
  let newCustomer = req.body;
  
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCustomer.routeName = newCustomer.id.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);
  customers.push(newCustomer);
  res.json(newCustomer);

})
  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });