import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import csv from "csv-parser";

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Part A: Handle GET request for /hello/amjad
app.get("/hello/amjad", (req, res) => {
  res.status(200).send("Hello, Amjad.");
});

// Part B & C & D: Handle POST request to receive and save ProfessionalProfile
app.post("/profile", (req, res) => {
  const profile = req.body;

  const requiredFields = [
    "Name",
    "Title",
    "TargetedKeywords",
    "Education",
    "Certification",
    "Contact",
  ];

  const missingFields = requiredFields.filter((field) => !profile[field]);

  if (missingFields.length) {
    return res
      .status(400)
      .json({ error: `Missing fields: ${missingFields.join(", ")}` });
  }

  // Append the profile to profiles.json file
  fs.readFile("profiles.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file." });
    }

    const profiles = JSON.parse(data.toString() || "[]");
    profiles.push(profile);

    fs.writeFile("profiles.json", JSON.stringify(profiles, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving profile." });
      }
      res.status(200).json({ message: "Profile saved successfully." });
    });
  });
});

// Part E: Handle GET request to retrieve profiles from CSV file
app.get("/profiles", (req, res) => {
  const results = [];

  fs.createReadStream("profiles.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
    })
    .on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
