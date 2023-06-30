// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "order",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the credentials are valid
  db.query(
    "SELECT * FROM auth WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.sendStatus(500);
        return;
      }

      if (results.length === 0) {
        // Invalid credentials
        res.sendStatus(401);
      } else {
        // Valid credentials
        if (username.startsWith("customer")) {
          res.json({ customer: results[0], status: "success" });
        } else if (username === "admin") {
          res.json({ admin: results[0], status: "success" });
        } else {
          res.status(401).json({ status: "error" });
        }
      }
    }
  );
});

app.post("/customer", (req, res) => {
  const {
    orderDate,
    company,
    owner,
    item,
    quantity,
    weight,
    requestForShipment,
    trackingId,
    shipmentSize,
    boxCount,
    specification,
    checklistQuantity,
  } = req.body;
  db.query(
    `INSERT INTO order (orderDate, company,
    owner,
    item,
    quantity,
    weight,
    requestForShipment,
    trackingId,
    shipmentSize,
    boxCount,
    specification,
    checklistQuantity,) VALUES (?, ?, ?)`,
    [
      orderDate,
      company,
      owner,
      item,
      quantity,
      weight,
      requestForShipment,
      trackingId,
      shipmentSize,
      boxCount,
      specification,
      checklistQuantity,
    ],
    (err) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.sendStatus(500);
        return;
      }

      res.send("Data submitted successfully!");
    }
  );
});

app.get("/admin", (req, res) => {
  db.query("SELECT * FROM order", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      res.sendStatus(500);
      return;
    }

    res.render("admin", { customers: results });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
