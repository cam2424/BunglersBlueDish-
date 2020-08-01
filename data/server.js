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
const tables = [
  {
      id: "1",
      name: "Jess",
      email: "email@me.com",
      phone: "801-555-5555"
  }
];
const reservations = [
  {
    id: "2",
    name: "Anali",
    email: "email2@me.com",
    phone: "801-444-4444"
}
];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
// Basic route that sends the user first to the make reservation Page
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

// Displays tables and reservations
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

// Displays all table json
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});
// Displays all reservations json
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// post to list
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user ??
  // This works because of our body parsing middleware ***********??
  let newTable = req.body;
  
  // Using a RegEx Pattern to remove spaces from newTable
  newTable.routeName = newTable.id.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);
  tables.push(newTable);
  res.json(newTable);
})
  
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user ??
  // This works because of our body parsing middleware ***********??
  let newReservation = req.body;
  
  // Using a RegEx Pattern to remove spaces from newTable
  newReservation.routeName = newReservation.id.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });