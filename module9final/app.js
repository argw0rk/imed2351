// This list keeps track of the habits on the page.
const habits = [
  { name: "Drink a glass of water", done: false },
  { name: "Get some fresh air", done: false },
  { name: "Read for 10 minutes", done: false }
];

let notes = [];
let noteNumber = 0;

const habitList = document.querySelector("#habit-list");
const habitForm = document.querySelector("#habit-form");
const habitInput = document.querySelector("#habit-input");
const progress = document.querySelector("#progress");
const dailyNote = document.querySelector("#daily-note");
const newNoteButton = document.querySelector("#new-note");

// Show the habits and checkboxes on the page.
function showHabits() {
  habitList.innerHTML = "";

  for (let i = 0; i < habits.length; i++) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.checked = habits[i].done;
    checkbox.dataset.habitNumber = i;
    checkbox.setAttribute("aria-label", "Mark " + habits[i].name + " as done");

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + habits[i].name));
    listItem.appendChild(label);
    habitList.appendChild(listItem);
  }

  updateProgress();
}

// Count the finished habits and update the message.
function updateProgress() {
  let doneCount = 0;

  for (let i = 0; i < habits.length; i++) {
    if (habits[i].done) {
      doneCount++;
    }
  }

  progress.textContent = doneCount + " out of " + habits.length + " habits done";
}

// Add a new habit when the form is submitted.
function addHabit(event) {
  event.preventDefault();

  const newHabit = habitInput.value.trim();
  if (newHabit === "") {
    return;
  }

  habits.push({ name: newHabit, done: false });
  habitInput.value = "";
  showHabits();
}

// Read the reminder messages from a text file.
function loadNotes() {
  fetch("daily-notes.txt")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("The note file could not be loaded.");
      }
      return response.text();
    })
    .then(function (text) {
      notes = text.split("\n");
      notes = notes.map(function (note) {
        return note.trim();
      });
      notes = notes.filter(function (note) {
        return note !== "";
      });

      if (notes.length > 0) {
        showNote();
        newNoteButton.disabled = false;
      } else {
        dailyNote.textContent = "There are no notes in the file yet.";
      }
    })
    .catch(function (error) {
      dailyNote.textContent = "Run this project with a local web server to load the notes.";
      console.log(error);
    });
}

// Show the next reminder from the text file.
function showNote() {
  dailyNote.textContent = notes[noteNumber];
  noteNumber++;

  if (noteNumber >= notes.length) {
    noteNumber = 0;
  }
}

habitForm.addEventListener("submit", addHabit);

habitList.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const habitNumber = event.target.dataset.habitNumber;
    habits[habitNumber].done = event.target.checked;
    updateProgress();
  }
});

newNoteButton.addEventListener("click", showNote);

showHabits();
loadNotes();
