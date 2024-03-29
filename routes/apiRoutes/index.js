const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

// Use Uniqid npm to create ids for new notes
const uniqid = require("uniqid");

// Import existing notes from db/db.json
const { notes } = require("../../db/db.json");


// ----- API Routes ----- //

// GET route '/notes' returns stored notes from JSON to the browser window
router.get("/notes", (req, res) => {
  res.json(notes);
});

// POST route to add a new user note
router.post("/notes", (req, res) => {
  // Get notes from body of request.
  let note = req.body;

  // Assign an id to the new note using uniqid npm.
  note.id = uniqid();  

  // Add a note object to the note array.
  notes.push(note);

  // Update the json file to display all notes from db/db.json file / object array.
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notes }, null, 2)
  );

  // Respond with note object that was added and display on page.
  res.json(note);

  // Update console to confirm add:
  console.log("Your new note: " + note + " has been added!");
});

// DELETE route to remove note from page -- borrowing req.params syntax from next module on SQL
router.delete("/notes/:id", (req, res) => {

    // Get id from selected note to delete
    const id = req.params.id;
  
    // Filter notes array to locate specific note with id.
    const isolateNote = notes.filter(note => note.id === id);
  
    // Loop through array to locate note with id, then remove that item.
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes.splice(i, 1);
      }
    };
  
    // Update the db.json file with notes array, selected note item should now be removed.
    fs.writeFileSync(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify({ notes: notes }, null, 2)
    );
  
    // Update browser to display notes minus the note that was removed from the object array.
    res.json(isolateNote);
  });

module.exports = router;
